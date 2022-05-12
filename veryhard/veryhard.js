// Creating the function with an array and an amount as arguments

const fewestNumberOfCoin = (coins, amount) => {
  if (amount < 1) {
    return 0;
  }

  const cache = Array(amount + 1);
  cache.fill(0);

  return coinChange(coins, amount, cache);
};

const coinChange = (coins, remainder, cache) => {
  /*
      Minimum coins to make change for a negative amount is -1.
    */
  if (remainder < 0) {
    return -1;
  }

  /*
      The minimum coins needed to make change for 0 is always 0
    
    */
  if (remainder === 0) {
    return 0;
  }

  // We already have an answer cached. Return it.
  if (cache[remainder] !== 0) {
    return cache[remainder];
  }

  /*
      No answer yet. Try each coin as the last coin in the change that
      we make for the amount
    */
  let minimum = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    const changeResult = coinChange(coins, remainder - coin, cache);

    /*
        If making change was possible (changeResult >= 0) and 
        the change result beats our present minimum, add one to
        that smallest value
            
        We accept that coin as the last coin in our change making
        sequence up to this point since it minimizes the coins we
        need
      */
    if (changeResult >= 0 && changeResult < minimum) {
      minimum = 1 + changeResult;
    }
  }

  /*
      If no answer is found (minimum == max value) then the
      sub problem answer is just arbitrarily made to be -1, otherwise
      the sub problem's answer is "minimum"
    */
  cache[remainder] = minimum === Number.MAX_SAFE_INTEGER ? -1 : minimum;

  return cache[remainder];
};
console.log(fewestNumberOfCoin([1, 2, 5], 11));
console.log(fewestNumberOfCoin([2], 3));
