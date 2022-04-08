import Evented from './evented';
import Subscription from './subscription';

class Store extends Evented {
    constructor(init) {
        super();
        this.payloads = init ? init : {};
        this.subscriptions = [];
    }

    subscribe(event, callback) {
        this.addEventListener(event, callback);
        const sub = new Subscription(this, event, callback);
        this.subscriptions.push(sub);
        // can i run the sub here?
        // this.publish(event, this.value(event));
        return sub;
    }

    value(event) {
        return this.payloads[event];
    }

    publish(event, payload) {
        this.payloads[event] = payload;
        this.dispatchEvent(
            event,
            {
                domEvent: false,
                targetComponent: null,
                ...payload
            }
        )
    }    
}

export default Store;