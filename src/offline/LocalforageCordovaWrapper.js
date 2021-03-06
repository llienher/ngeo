import AbstractWrapper from 'ngeo/offline/AbstractLocalforageWrapper.js';

const exports = class CordovaWrapper extends AbstractWrapper {
  constructor() {
    super();
    window.addEventListener('message', this.receiveMessage.bind(this), false);
  }

  /**
   * @param {Object} action
   * @override
   */
  postToBackend(action) {
    window['parent'].postMessage(action, '*');
  }
};


export default exports;
