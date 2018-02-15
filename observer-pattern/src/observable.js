tddjs.namespace("util");

(function () {
    function Observable() {
    }

    tddjs.util.Observable = Observable;
    
    function _observers(observable, event) {
        if (!observable.observers) {
            observable.observers = {};
        }

        if (!observable.observers[event]) {
            observable.observers[event] = [];
        }

        return observable.observers[event];
    }

    function observe(event, observer) {
        if (typeof observer != "function") {
            throw new TypeError("observer is not a function!!!");
        }
        _observers(this, event).push(observer);
    }

    function hasObserver(event, observer) {
        var observers = _observers(this, event);

        return !observers ? false : observers.includes(observer);
    }

    function notify(event) {
        var observers = _observers(this, event);
        if (!observers) {
            return;
        }

        var args = Array.prototype.slice.call(arguments, 1);

        for (var i = 0, l = observers.length; i < l; i++) {
            try {
                observers[i].apply(this, args);
            } catch (e) {
            }
        }
    }

    tddjs.namespace("util").observable = {
        observe: observe,
        hasObserver: hasObserver,
        notify: notify
    };
}())

