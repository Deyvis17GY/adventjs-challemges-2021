function canMouseEat(direction, game) {
  let row = game.findIndex((row) => row.includes('m'));
  let col = game[row].indexOf('m');
  const directios = {
    up: [row - 1, col],
    down: [row + 1, col],
    left: [row, col - 1],
    right: [row, col + 1],
  };
  const [newRow, newCol] = directios[direction];
  if (
    newRow < 0 ||
    newRow >= game.length ||
    newCol < 0 ||
    newCol >= game[0].length
  ) {
    return false;
  }
  if (game[newRow][newCol] === '*') {
    return true;
  }
  return false;
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
];

console.log(canMouseEat('up', room));
