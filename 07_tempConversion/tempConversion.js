const ftoc = function() {
  let f = arguments[0];
  let c = (f - 32) * 5/9;
  c = Math.round(c * 10) / 10;
  return c;
};

const ctof = function() {
  let c = arguments[0];
  let f = c * 9/5 + 32;
  f = Math.round(f * 10) / 10;
  return f;
};

module.exports = {
  ftoc,
  ctof
};
