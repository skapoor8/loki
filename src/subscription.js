export default class Subscription {
    constructor(store, event, callback) {
        this.s = store;
        this.e = event;
        this.cb = callback;
    }

    value() {
        this.s.value(this.e);
    }

    unsubscribe() {
        this.s.removeEventListener(this.e, this.cb);
    }
}