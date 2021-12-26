function daysToXmas(date) {
  const dateParameter = new Date(date);
  const dateNavidad = new Date('Dec 25, 2021');
  const timeDiff = dateNavidad.getTime() - dateParameter.getTime();
  const formatDays = 1000 * 60 * 60 * 24;
  return Math.ceil(timeDiff / formatDays)
}
console.log(daysToXmas(new Date('Dec 25, 2021')));
