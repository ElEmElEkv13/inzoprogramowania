module.exports = function pierwiastkiRownania(a, b, c) {
  let delta = b * b - 4 * a * c;
  let root1, root2;

  if (delta < 0) {
    return {};
  } else if (delta === 0) {
    root1 = -b / (2 * a);
    return { root1 };
  } else {
    root1 = (-b + Math.sqrt(delta)) / (2 * a);
    root2 = (-b - Math.sqrt(delta)) / (2 * a);
    return { root1, root2 };
  }
};
