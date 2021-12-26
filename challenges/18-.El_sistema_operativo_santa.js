function fixFiles(files) {
  const counter = {};
  return files.reduce((acc, actual) => {
    acc.push(acc.includes(actual) ? `${actual}(${counter[actual]})` : actual);
    counter[actual] = (counter[actual] ?? 0) + 1;
    return acc;
  }, []);
}

const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
console.log(fixFiles(files3));
