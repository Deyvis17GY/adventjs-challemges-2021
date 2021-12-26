function decodeNumber(symbols) {
  const values = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  };
  return symbols
    .split('')
    .map((symbol) => values[symbol])
      .reduce((result, value, index, arr) => result + (value < arr[index + 1] ? -value : value), 0);
}

console.log(decodeNumber(';!'));
