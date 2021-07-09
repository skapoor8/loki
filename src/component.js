/**
 * Filename:        component.js
 * Author:          Siddharth Kapoor
 * Purpose:         Lightweight component class
 */

import '/ejs/ejs.min.js';
import trimStrart from '/lodash-es/trimStart.js';

import Evented from './evented.js';

class Component extends Evented {
    static nextUid = 0;
    static selector = 'loki-component';
    static components = [];
    static events = [];

    constructor(opts={}) {
        if (opts.selector) {
            super(opts);
            this.container = document.querySelector(opts.selector);
        } else if (opts.domElement) {
            super(opts);
            this.container = opts.domElement;
        } else {
            super(opts);
            var selector = this.constructor.selector;
            this.container = document.createElement(selector);
        }
        
        this.uid = this.constructor.selector + '-' + this.constructor.nextUid++;
        this.state = opts.state ? opts.state : {};
        this.elements = {};
        this.components = {};
        if (opts.toplevel) {
            this.toplevel = opts.toplevel;
            this.constructor._appendStyles({isRoot: true});  
        } 

        var {html, states} = EJS(this.render(), this.state);
        this.container.innerHTML = html;
        this._captureElements();
        this._initComponents(states);
        this._registerEvents();
        if (opts.toplevel) {
            this._autoAttachEventListeners();
        }
        this.addEventListener();
    }

    // overridable methods -------------------------------------------------------------------------
    render() {
        return `<h1>Loki Component</h1>`;
    }

    static style() {
        return ``;
    }

    addEventListeners() {}

    // lifecycle methods ---------------------------------------------------------------------------
    componentDidMount() {}
    componentWillUnmount() {}
    beforeUpdate() {}
    afterUpdate() {}

    // public methods ------------------------------------------------------------------------------
    static init(opts) {
        return new this.constructor({toplevel: true, ...opts});
    }

    setState(newState) {
        if (newState && typeof newState == 'object') {
            this.beforeUpdate();
            this.unmount();
            this.state = {
                ...this.state,
                ...newState
            }
            var {html, states} = EJS(this.render(), this.state);
            this.container.innerHTML = html;
            this._captureElements();
            this._initComponents(states);
            this._registerEvents();
            if (this.toplevel) {
                this._autoAttachEventListeners();
            }
            this.addEventListener();
            this.afterUpdate();
        }
    }

    querySelector(sel) {
        var el = this.container.querySelector(sel);
        if (el.dataset.componentId) {
            return this.components[el.dataset.componentId];
        } else {
            return el;
        }
    }

    unmount() {
        this.removeEventListeners();
        this._releaseElements();
        this._unmountComponents();
    }
    
    // private methods -----------------------------------------------------------------------------
    static _appendStyles(opts={}) {
        if (opts.isRoot) {
            var style = document.createElement('style');
            style.type = 'text/css';
            style.id = this.selector+'-style';
            style.innerHTML = CSS(this.style(), this.selector);
            document.head.appendChild(style);
            this.components.forEach(c => {
                c._appendStyles({styleId: style.id, isRoot: false});
            });
        } else {
            if (opts.styleId) {
                var style = document.querySelector('#'+opts.styleId);
                style.innerHTML += CSS(this.style(), this.selector);
                this.components.forEach(c => {
                    c._appendStyles({styleId: opts.styleId, isRoot: false});
                });
            } else {
                throw new Error('Component: _appendStyles expects opts.styleId to append component' 
                                + ' to the correct style tag');
            }
        }
    }

    static _getRegisteredSelectors() {
        // get list of custom component selectors
        // console.log('constructor = ', this.components);
        return this.components.map(c => c.selector);
    }

    static _getSelectorToComponentMap() {
        var selMap = {};
        this.components.forEach(c => {
            selMap[c.selector] = c;
        });
        return selMap;
    }
    
    _autoAttachEventListeners() {
        // console.log('Attaching event listeners for component', this.uid);
        var blacklist = this.constructor._getRegisteredSelectors();
        var apply = (node) => {
            var isComponent = blacklist.includes(node.tagName.toLowerCase());
            var ds = JSON.parse(JSON.stringify(node.dataset))
            // console.log('apply: ', node, ds);
            for (var attr in ds) {
                if (/^on/g.test(attr)) {
                    var event = attr.replace('on', '').toLowerCase();
                    // console.log('Attaching function', this[ds[attr]], 'on event', event);
                    if (isComponent) {
                        // console.log()
                        var componentId = ds.componentId;
                        var component = this.components[componentId];
                        component.addEventListener(event, this[ds[attr]].bind(this));
                    } else {
                        node.addEventListener(event, this[ds[attr]].bind(this))
                    }
                }
            }
        }
        var children = [];
        for (var i = 0; i < this.container.childNodes.length; i++) {
            children.push(this.container.childNodes[i]);
        }
        inorderWalk(children, apply, blacklist);
        for (var cid in this.components) {
            var c = this.components[cid];
            c._autoAttachEventListeners();
        }
    }
 
    _captureElements() {
        var elements = this.container.querySelectorAll('[data-element]');
        var selMap = this.constructor._getSelectorToComponentMap();
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            // console.log('_captureElements tagName =', el.tagName);
            if (!this.constructor._getRegisteredSelectors().includes(el.tagName.toLowerCase())) {
                // console.log('element added');
                this.elements[el.dataset.element] = el;
            }  
        }
    }

    _releaseElements() {
        for (var el in this.elements) {
            delete this.elements[el];
        }
    }

    _initComponents(states) {
        var subcomponentSelectors = this.constructor._getRegisteredSelectors(); 
        var selectorToComponentMap = this.constructor._getSelectorToComponentMap();       

        // find all containers to render components in
        subcomponentSelectors.forEach(sel => {
            var targets = this.container.querySelectorAll(sel);
            // console.log('Initializing components in', this.constructor.name, ', targets for sel(', sel, ') are', targets);
            for (var i = 0; i < targets.length; i++) {
                // init components, store them in this.components
                var initState = states[parseInt(targets[i].dataset.stateStub)];
                var selectorClass = selectorToComponentMap[sel];
                var c = new selectorClass({domElement: targets[i], state: initState});
                if (targets[i].dataset.element) {
                    this.elements[targets[i].dataset.element] = c;
                }
                this.components[c.uid] = c;
                targets[i].dataset.componentId = c.uid;
            }
        });  
    }

    _unmountComponents() {
        for (var cid in this.components) {
            var c = this.components[cid];
            c.unmount();
            delete this.components[cid];
        }
    }

    _registerEvents() {
        this.constructor.events.forEach(e => {
            this.registerEvent(e);
        });
    }
}

export default Component;

// helpers -----------------------------------------------------------------------------------------
function EJS(template, data) {
    template = template.replaceAll(' el=', ' data-element=');
    template = template.replaceAll(/\son(\w+)="/g, ' data-on-$1="');
    var processed = ejs.render(template, data);
    var states = [], stub = 0;
    processed = processed.replaceAll(/\sstate="(.*)"/g, function(match, token) {
        var transformer = document.createElement('div');
        transformer.innerHTML=token;
        states.push(JSON.parse(transformer.innerText));
        var replacement = ' data-state-stub="'+stub+'"';
        stub += 1;
        return replacement;
    });
    // console.log('states = ', states);
    return {html: processed, states: states};
}

function CSS(styleString, scopeSelector) {
    var rules = styleString.split('}');
    rules.pop();
    // console.log('rules =', rules);
    rules = rules.map(r => ((new RegExp('\n*\s*'+scopeSelector, 'g')).test(r) ? '' : scopeSelector + ' ')  + trimStrart(r) + '}\n\n')
                .filter(r => r != '');
    // console.log('rules =', rules);
    return rules.join('');
}

function inorderWalk(parentNodes=[], apply, blacklist=[]) {
    var children = [];
    parentNodes.forEach(p => {
        if (p.nodeType == Node.ELEMENT_NODE) {
            apply(p);
            if (!blacklist.includes(p.tagName.toLowerCase())) {
                var pChildren = p.childNodes;
                for (var i = 0; i < pChildren.length; i++) {
                    children.push(pChildren[i]);
                }
            } 
        }
        
    });
    if (children.length > 0) {
        inorderWalk(children, apply, blacklist);
    }
}

