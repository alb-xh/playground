const array = [ 1, [ 2, [ 3, 4 , [ 5, 6 ] , 7 ], [ 8, [ 9 ] ], 10 ] ];

const deepFlat = (array) => array.reduce((newArray, item) => {
  if (Array.isArray(item)) {
    return [
      ...newArray,
      ...deepFlat(item),
    ];
  }

  return [ ...newArray, item ];
}, []);

console.log(deepFlat(array));
