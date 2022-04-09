import Evented from './evented';
import Subscription from './subscription';

class Store extends Evented {
    constructor(data) {
        super();
        this.payloads = data ? data : {};
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

    sub(e, cb) {
        return this.subscribe(e, cb);
    }

    value(event) {
        return this.payloads[event];
    }

    val(e) {
        return this.value(e);
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
    
    pub(e, payload) {
        this.publish(e, payload);
    }
}

export default Store;