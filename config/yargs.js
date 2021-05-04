const argv = require('yargs')
    .options({
        base: {
            alias: 'b',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar' 
        },
        hasta: {
            alias: 'h',
            type: 'number',
            default: 10,
            describe: 'Hasta que número desea multiplicar'
        },
        listar: {
            alias: 'l',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        }
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b ) )
            throw 'La base tiene que ser un número';

        if ( isNaN( argv.h ) )
            throw 'El hasta tiene que ser un número';
        
        return true;
    })
    .argv;

module.exports = argv;