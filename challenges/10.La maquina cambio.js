function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  const result = Array(coins.length).fill(0);
  for (let i = coins.length - 1; i >= 0; i--) {
    if (change === 0) {
      return result;
    }
    if (change >= coins[i]) {
      result[i] = Math.floor(change / coins[i]);
      change = change % coins[i];
    }
  }
  return result;
}

console.log(getCoins(51));
