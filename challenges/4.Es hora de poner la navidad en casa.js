function createXmasTree(height) {
  let arbol = '';
  const arbolObj = {
    asterisco: '*',
    barra: '_',
    tronco: '#',
  };

  const { asterisco, barra, tronco } = arbolObj;

  for (let i = 1; i <= height; i++) {
    arbol = arbol.concat(
      barra.repeat(height - i),
      asterisco.repeat(i + i - 1),
      barra.repeat(height - i),
      '\n'
    );
  }

  arbol = arbol.concat(
    barra.repeat(height - 1),
    tronco,
    barra.repeat(height - 1),
    '\n'
  );
  arbol = arbol.concat(
    barra.repeat(height - 1),
    tronco,
    barra.repeat(height - 1)
  );
  return arbol;
}

console.log(createXmasTree(5));
