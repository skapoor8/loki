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
            this.element = document.querySelector(opts.selector);
        } else if (opts.domElement) {
            this.element = opts.domElement;
        }
        this.events = [];
        this.listeners = {};
    }

    addEventListener(e, callback) {
        if (this.firesEvent(e)) {
            if (this.listeners[e]) {
                this.listeners[e].push(callback);  
            } else {
                this.listeners[e] = [callback];
            }
            if (this.element) this.element.addEventListener(e, callback);
        }
    }

    on(e, callback) {
        this.ddEventListener(e, callback);
    }

    _removeEventListener(e, cb) {
        if (this.element) this.element.removeEventListener(e, callback);
        this.listeners[e].splice(this.listeners[e].indexOf(callback),1);
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
            this.listeners[e] && this.listeners.forEach(cb => {
                this._removeEventListener(e, cb);
            });
        });
    }

    registerEvent(name) {
        this.events.push[name];
    }

    firesEvent(name) {
        return this.events.indexOf(name) != -1;
    }

    dispatchEvent(name, payload) {
        if (this.firesEvent(name)) {
            if (this.element) {
                // TODO: deliver payload through dom event
                this.element.dispatchEvent(new CustomEvent(name, {
                        detail: {
                            domEvent: true,
                            ...payload
                        }
                    }));
            } else {
                this.listeners[name] && this.listeners.name.forEach(cb => {
                    cb({detail: {
                        domEvent: false,
                        ...payload
                    }});
                });
            }
        }
        else {
            throw new Error(`Evented: no event ${name} registered`);
        }
    }

    emit(name, payload) {
        this.dispatchEvent(name, payload);
    }
}

export default Evented;