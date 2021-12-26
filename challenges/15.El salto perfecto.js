function checkSledJump(heights) {
  const indiceMax = heights.findIndex(
    (item, index, arr) => item === Math.max(...arr)
  );
  const arr1 = heights.slice(0, indiceMax);
  const arr2 = heights.slice(indiceMax + 1, heights.length).reverse();
  return isOrder(arr1) &&
    isOrder(arr2) &&
    arr2.length !== 0 &&
    arr1.length !== 0
    ? true
    : false;
}


function isTodosDiferentes(arreglo) {
  return arreglo.every((item, index, arr) => arr.indexOf(item) === index);
}

function isOrder(arreglo) {
  return JSON.stringify(arreglo) ===
    JSON.stringify(arreglo.sort((a, b) => a - b)) && isTodosDiferentes(arreglo)
    ? true
    : false;
}

console.log(checkSledJump([1, 2, 3, 2, 1]));