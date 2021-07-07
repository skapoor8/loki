/**
 * Filename:        component.js
 * Author:          Siddharth Kapoor
 * Purpose:         Lightweight component class
 * 
 * Features:    
 * 1. Render html
 * 2. Scope and append styles
 * 
 * Questions
 * 1. life cycle methods
 * 2. life cycle events? standard basic events on all components?
 */
import '/ejs/ejs.min.js';

import Evented from './evented.js';

class Component extends Evented {
    static selector = 'loki-component';
    static components = [];
    static events = [];

    constructor(opts={}, state={}) {
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
        console.log(this.constructor.name, 'constructor called');
        
        this.uid = this.constructor.selector + '-' + Date.now();
        this.state = state;
        this.elements = {};
        this.registry = {};
        this.components = {};
        
        
        if (opts.toplevel) {
            this.store = {}; // TODO: create new store
        } else if (opts.parentStore) {
            this.store = opts.parentStore;
        } else {
            this.store = null;
        }

        this.container.innerHTML = EJS(this.render(), this.state);
        // if (this.toplevel) {

        // } else {

        // }
        console.log('static test:', this.constructor.components, this.constructor.registeredComponents());
        this._captureElements();
        this._initComponents();
        // this.registerEvents();
        this.addEventListener();
        this.addSubscriptions();
    }

    static init(opts) {
        return new this.constructor({toplevel: true, ...opts});
    }

    unmount() {
        this.removeEventListeners();
        this._removeSubscriptions();
        this._releaseElements();
        this._unmountComponents();
    }

    beforeUnmount() {}

    render() {
        // returns html
        return `<h1>Loki Component</h1>`;
    }

    beforeRender() {}
    afterRender() {}

    static style() {
        // return css
        // - scope everything to 
        return css``;
    }

    static registeredEvents() {
        // return array of valid event names
        return [];
    }

    static registeredComponents() {
        // return object containing any component that can be initialised in render
        return [];
    }

    static _getRegisteredSelectors() {
        // get list of custom component selectors
        console.log('constructor = ', this.components, this.registeredComponents());
        return this.components.map(c => c.selector);
    }

    static _getSelectorToComponentMap() {
        var selMap = {};
        this.components.forEach(c => {
            selMap[c.selector] = c;
        });
        return selMap;
    }
    

    addEventListeners() {}
    _removeEventListeners() {}

    addSubscriptions() {}
    _removeSubscriptions() {}

    _captureElements() {
        var elements = this.container.querySelectorAll('[data-element]');
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            this.elements[el.dataset.element] = el;
        }
    }

    _releaseElements() {
        for (var el in this.elements) {
            delete this.elements[el];
        }
    }

    _initComponents() {
        var subcomponentSelectors = this.constructor._getRegisteredSelectors(); 
        var selectorToComponentMap = this.constructor._getSelectorToComponentMap();       

        // find all containers to render components in
        subcomponentSelectors.forEach(sel => {
            var targets = this.container.querySelectorAll(sel);
            console.log('Initializing components in', this.constructor.name, ', targets for sel(', sel, ') are', targets);
            for (var i = 0; i < targets.length; i++) {
                // init components, store them in this.components
                var selectorClass = selectorToComponentMap[sel];
                var c = new selectorClass({domElement: targets[i]});
                this.components[c.uid] = c;
            }
        });  
    }

    _unmountComponents() {
        for (var cid in this.components) {
            var c = this.components[cid];
            c.unmount();
        }
    }
}

export default Component;

// helpers -----------------------------------------------------------------------------------------
function EJS(template, data) {
    template = template.replaceAll('el', 'data-element');
    console.log('ejs = ', ejs);
    return ejs.render(template, data);
}
function CSS(styleString) {

}

function loki() {
    // split into string + js
    // eval js
    // embed anything that produces string or an array of strings (valid xml)
    // otherwise, see if embedded js needs to be evaluated
}

function parseElements(el) {

}

function createElement(parent, type, attr, ...children) {
    var el;

}

function createHtmlElement(type, attr) {

}


