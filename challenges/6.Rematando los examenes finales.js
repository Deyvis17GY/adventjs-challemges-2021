function sumPairs(numbers, result) {
  let number;
  numbers.every((num, index) =>
    numbers.every((num2, index2) =>
      num + num2 === result && index !== index2
        ? ((number = [num, num2]), false)
        : true
    )
  );
  return number;
}

console.log(sumPairs([3, 4, 4, 3], 6));

//
// function sumPairs(numbers, result) {
//   for (let n = 0; n < numbers.length; n++) {
// for (let m = 0; m < numbers.length; m++) {
//   if (numbers[n] + numbers[m] === result) {
// return [numbers[n], numbers[m]];
//   }
// }
//   }
//   return null;
// }
//
