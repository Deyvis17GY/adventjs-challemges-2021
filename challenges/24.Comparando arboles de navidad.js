function countDecorations(bigTree) {
  return [bigTree].reduce((acc, { value, left, right }) => {
    const totalLeft = left ? countDecorations(left) : 0;
    const totalRight = right ? countDecorations(right) : 0;
    return acc + value + totalLeft + totalRight;
  }, 0);
}

function checkIsSameTree(treeA, treeB) {
  return countDecorations(treeA) === countDecorations(treeB);
}


const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

console.log(checkIsSameTree(tree, tree2));