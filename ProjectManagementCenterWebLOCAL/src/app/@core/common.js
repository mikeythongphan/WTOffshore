/**
 * 
 * @param {*} err 
 * @returns 
 */
export const fail = err => {
  return {succeeded: false, error: err, data: []};
}

/**
 *
 * @param val
 */
export const isUoN = val => val === undefined || val === null;

/**
 *
 * @param val
 */
export const isUNE = val => {
  // Check undefined or null
  if (isUoN(val)) {
    return true;
  }

  // Check string length = 0
  if (typeof val === 'string' || val instanceof String) {
    if (val.length === 0) {
      return true;
    }
  }

  // Check array length = 0
  if (Array.isArray(val)) {
    if (val.length === 0) {
      return true;
    }
  }

  if (typeof val === 'object' || val instanceof Object) {
    if (Object.keys(val).length === 0) {
      return true;
    }
  }

  return false;
};

/**
 *
 * @param {*} str
 */
export const isStringJSON = (str) => {
  try {
    return !!(JSON.parse(str) && str);
  } catch (e) {
    return false;
  }
}

export const prepareObject = (objectForm) => {
  return Object.keys(objectForm).reduce((acc, key) => {
    if(!isUNE(objectForm[key])){
      acc[key] = objectForm[key];
    }
    return acc;
  }, {});
}

export const fullAddress = (user) => {
  return `${user.address} ${user.city}, ${user.stateProvince} ${user.postalCode}`;
}

export const fromEntries = (iterable) => {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});
};