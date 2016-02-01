import Ember from 'ember';

export function eq(params/*, hash*/) {
  if (params.length !== 2) {
    return false;
  }

  return params[0] === params[1];
}

export default Ember.Helper.helper(eq);
