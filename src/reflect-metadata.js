require('reflect-metadata');

function Module(metadata) {
  return (target) => {
      for (const property in metadata) {
          if (metadata.hasOwnProperty(property)) {
              Reflect.defineMetadata(property, metadata[property], target);
          }
      }
  };
}

class A {
  static register () {

  }
};

Module({ exports: [ 1, 2, 4 ] })(A)
console.log(Reflect.getMetadata('exports', A));
