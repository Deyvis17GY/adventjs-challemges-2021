function canReconfigure(from, to) {
  if (from.length !== to.length) return false;
  const assign = {};
  for (const i in from) {
    if (
      Object.values(assign).some((value) => value === to[i]) &&
      assign[from[i]] !== to[i]
    )
      return false;
    if (assign[from[i]] && assign[from[i]] !== to[i]) return false;
    assign[from[i]] = to[i];
  }
  return true;
}


const from = 'BAL';
const to = 'LIB';
console.log(canReconfigure(from, to));