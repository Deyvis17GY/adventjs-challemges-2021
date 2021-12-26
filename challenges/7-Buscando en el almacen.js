// function contains (store, product) {
//     return Object.values(store).some(function (item) {
//       console.log(item);
//     return item === product
//   })
// }

// function contains(store, product) {
//   const array = JSON.stringify(store);
//   return array.includes(product);
// }
function covertObj(obj) {
  let result = [];
  for (const pro in obj) {
    const value = obj[pro];
    if (typeof value === 'object') {
      result = result.concat(...covertObj(value));
    } else {
      result.push(value);
    }
  }
  return result;
}

function contains(store, product) {
  const array = covertObj(store);
  return array.includes(product);
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite',
    },
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta', // <- ¡Está aquí!
    },
  },
};

console.log(contains(almacen, 'camiseta')); // true
