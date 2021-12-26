function missingReindeer(ids) {
  let salida;
  const aux = [...Array(ids.length).keys()];
    const ids_aux = ids.sort((a, b) => a - b);
    console.log(ids_aux);
  (JSON.stringify(aux) === JSON.stringify(ids_aux))
    ? salida = ids_aux.at(-1) + 1
      :
      (
          ids_aux.forEach((_, index, array) => {
        if (array.indexOf(index) === -1) {
          salida = index;
        }
          })
      );
  return salida;
}

console.log(missingReindeer([0, 1, 2, 3]));
