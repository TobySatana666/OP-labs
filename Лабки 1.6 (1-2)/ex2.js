const compose = (...fns) => {

  const Subs = [];

  const SUBME = (x) => {
    if (fns.length === 0) {
      return x;
    }

    try {
      let res = x;
      for (let i = fns.length - 1; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (err) {
      for (const Sub of Subs) {
        Sub(err);
      }
      return undefined;
    }
  };

  SUBME.on = (name, Sub) => {
    if (name === 'error') {
      Subs.push(Sub);
    }
  };

  return SUBME;
};

const assert = require('node:assert');