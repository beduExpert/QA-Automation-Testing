const memo = {};

const fibonacci = (n) => {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  if (n === 0) {
    memo[n] = 0;
    return memo[n];
  }

  if (n === 1) {
    memo[n] = 1;
    return memo[n];
  }

  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
};

module.exports = { fibonacci };
