import { PubSub } from "pubsub-js";

function subscribe(event, callback) {
    return PubSub.subscribe(event, callback);
}

function publish(event, data) {
    return PubSub.publish(event, data);
}

export { subscribe, publish };