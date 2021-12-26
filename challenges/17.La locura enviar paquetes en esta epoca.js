function countPackages(carriers, carrierID) {
  const [, packages, team] = carriers.find(
    ([carrier]) => carrier === carrierID
  );
  return (
    packages +
    team.reduce((total, member) => total + countPackages(carriers, member), 0)
  );
}

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []],
];

countPackages(carriers, 'dapelu'); // 9
