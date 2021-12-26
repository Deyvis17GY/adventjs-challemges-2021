const array = ['one', 'two', 'three'];

function groupBy(collection, it) {
  const grouped = {};
  let key;
  collection.forEach((item) => {
    if (it === 'length') {
      key = item.length;
    } else if (typeof it === 'function') {
      key = it(item);
    } else if (typeof it === 'string') {
      key = item[it];
    }
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
  });
  return grouped;
}

console.log(groupBy(['one', 'two', 'three'], 'length'));
