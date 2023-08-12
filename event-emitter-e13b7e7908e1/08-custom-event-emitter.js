class EventEmitter {
  listeners = {};

  addListener(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);

    return this;
  }

  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  removeListener(eventName, fn) {
    let listenersArr = this.listeners[eventName];

    if (!listenersArr.length) return this;

    for (let i = listenersArr.length; i > -1; i--) {
      if (listenersArr[i] === fn) {
        listenersArr.splice(i, 1);
        break;
      }
    }

    return this;
  }

  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  once(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];

    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    };

    this.listeners[eventName].push(onceWrapper);

    return this;
  }

  emit(eventName, ...args) {
    let listenersArr = this.listeners[eventName];

    if (!listenersArr.length) return false;

    listenersArr.forEach((handler) => {
      handler(...args)
    });

    return true;
  }
  
  listenerCount(eventName) {
    let listenersArr = this.listeners[eventName] || [];

    return listenersArr.length;
  }

  rawListeners(eventName) {
    return this.listeners[eventName];
  }
}

