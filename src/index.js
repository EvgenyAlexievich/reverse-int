module.exports = function reverse(n) {
  const res = n.toString().split('').reverse().join('');
  return parseInt(res, 10);
};
