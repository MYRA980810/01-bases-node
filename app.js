//Paquetes requeridos
const {crearTabla} = require('./multiplicar.js')
const argv = require('./config/yargs.js');
require('colors');


crearTabla(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'.rainbow))
    .catch(err => console.log(err));
