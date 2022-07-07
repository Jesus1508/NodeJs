
const { option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');


const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        } else {
            return true
        }
    })
    .argv;


console.clear();

// console.log(process.argv, argv);

console.log(argv);
// console.log('base: yargs', argv.base);
// console.log('base: yargs', argv.b);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(base);

// const base = 7;
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
    .catch(err => console.log(err));