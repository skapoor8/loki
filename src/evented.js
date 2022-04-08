/**
 * Filename:    evented.js
 * Author:      Siddharth Kapoor
 * Purpose:     Provides a mixin class to make an object evented. Simply wraps 
 *              around DOM elements evented interface if one is provided to the 
 *              constructor, otherwise implements it internally.
 * 
 * Features
 * 1. Abstracts away event implementation and provides a flexible interface
 * 2. Provide manual and automatic removal of event listeners
 * 
 * Questions
 * 1. How to provide custom data payloads
 * 2. once? ntimes?
 * 3. scoping and uniqueness...?
 */

class Evented {
    constructor(opts) {
        if (opts.selector) {
            this.eventTarget = document.querySelector(opts.selector);
        } else if (opts.domElement) {
            this.eventTarget = opts.domElement;
        }
        this.events = [];
        this.listeners = {};
    }

    // public methods ------------------------------------------------------------------------------
    addEventListener(e, callback) {
        if (this.firesEvent(e)) {
            if (this.listeners[e]) {
                this.listeners[e].push(callback);  
            } else {
                this.listeners[e] = [callback];
            }
            if (this.eventTarget) this.eventTarget.addEventListener('loki-'+e, callback);
        }
    }

    on(e, callback) {
        this.addEventListener(e, callback);
    }

    removeEventListener(e, callback) {
        if (this.firesEvent(e)) {
            if (this.listeners[e] && this.listeners[e].indexOf[callback] != -1) {
                this._removeEventListener(e, callback);
            } 
        }
    }

    off(e, callback) {s
        this.removeEventListener(e, callback);
    }

    removeEventListeners() {
        this.events.forEach(e => {
            this.listeners[e] && this.listeners[e].forEach(cb => {
                this._removeEventListener(e, cb);
            });
        });
    }

    registerEvent(name) {
        if (!this.firesEvent(name)) {
            this.events.push(name);
        }   
    }

    firesEvent(name) {
        return this.events.indexOf(name) != -1;
    }

    dispatchEvent(name, payload={}) {
        console.log('In Evented.dispatchEvent');
        try {
            if (this.firesEvent(name)) {
                if (this.eventTarget) {
                    // TODO: deliver payload through dom event
                    var e = new CustomEvent('loki-'+name, {
                        detail: {
                            domEvent: true,
                            targetComponent: this,
                            ...payload,
                        }
                    });
                    console.log('custom event called on', this.constructor.name, 'is', e);
                    this.eventTarget.dispatchEvent(e);
                } else {
                    console.log('in else');
                    this.listeners[name] && this.listeners.name.forEach(cb => {
                        cb({detail: {
                            domEvent: false,
                            targetComponent: this,
                            ...payload,
                        }});
                    });
                }
            }
            else {
                throw new Error(`Evented: no event ${name} registered`);
            }
        } catch(e) {
            console.error('dispatchEvent failed in Evented');
            console.error(e);
            throw(e);
        }
    }

    emit(name, payload) {
        this.dispatchEvent(name, payload);
    }
    

    // private methods -----------------------------------------------------------------------------
    _removeEventListener(e, cb) {
        if (this.eventTarget) this.eventTarget.removeEventListener('loki-'+e, cb);
        this.listeners[e].splice(this.listeners[e].indexOf(cb),1);
    }
}

export default Evented;