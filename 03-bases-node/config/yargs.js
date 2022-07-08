const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar deseada',
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla de multiplicar en consola',
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: false,
            describe: 'Limite de iteraciones',
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

module.exports = argv;