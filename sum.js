function sum() {
  return Array.prototype.reduce.call(arguments, (memo, item) => memo + item, 0);
}