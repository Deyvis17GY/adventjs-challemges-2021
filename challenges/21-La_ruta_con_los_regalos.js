function canCarry(capacity, trip) {
  const minPos = Math.min(...trip.map((t) => t[1]));
  const maxPos = Math.max(...trip.map((t) => t[2]));
  const gifsPerStop = [...Array(maxPos - minPos).keys()].map((index) => {
    const stop = index + minPos;
    return trip
      .filter(([, ini, end]) => stop >= ini && stop < end)
      .reduce((acc, [regalos]) => acc + regalos, 0);
  });
  return gifsPerStop.every((num) => num <= capacity);
}


console.log(canCarry(3, [[1, 1, 5], [2, 2, 10]])); // true