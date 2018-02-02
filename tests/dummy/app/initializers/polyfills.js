// get Ember's Promise/fetch
import { Promise } from 'rsvp';
import fetch from 'fetch';

export function initialize() {
  // "polyfill" global Promise/fetch for IE
  if (!window.Promise) {
    window.Promise = Promise;
  }
  if (!window.fetch) {
    window.fetch = fetch;
  }
}

export default {
  initialize
};
