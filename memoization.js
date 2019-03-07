function memoization(func) {
  if (!memoization.cache) {
    memoization.cache = {};
  }

  return (...args) => {
    let { cache } = memoization;
    const key = `${func.name}${JSON.stringify(args)}`;
    if (typeof cache[key] === 'undefined') {
      return cache[key];
    }

    cache[key] = func.apply(null, args);
    return cache[key];
  }
}
