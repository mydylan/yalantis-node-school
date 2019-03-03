function memoization(func) {
  if (!this.cache) {
    this.cache = {};
  }
  return () => {
    const key = `${func.name}${JSON.stringify(arguments)}`;
    if (cache[key]) {
      return cache[key];
    }

    cache[key] = func.apply(null, arguments);
    return cache[key];
  }
}