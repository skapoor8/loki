import Evented from './evented';
import SubscriptionManager from './subscription-manager';

/**
 * Services should handle
 * 
 * 1. deleteing relevant data
 * 2. knowing which component created them
 * 3. loading
 * 4. basic service logic - fetch, error handling, auth...
 */

export default class Service extends Evented {
    constructor(componentId, store) {
        this.componentId = componentId;
        this.sm = new SubscriptionManager(store);
        this.loadSuccess = false;

        this.load()
        .then(() => {
            this.loadSuccess = true;
            this.dispatchEvent('loadSuccess');
        })
        .catch(e => {
            this.loadSuccess = false;
            this.dispatchEvent('loadFailure');
        });
    }

    async load() {}

    clearData() {
        this.sm.unsubscribeAll();
        this.removeEventListeners();
    }
}