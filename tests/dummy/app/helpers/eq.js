import { helper } from '@ember/component/helper';

export function eq(params/*, hash*/) {
  if (params.length !== 2) {
    return false;
  }

  return params[0] === params[1];
}

export default helper(eq);
