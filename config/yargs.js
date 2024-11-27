const argv = require('yargs')
                            .option('b', {
                                alias: 'base',
                                default: 5,
                                type: 'number',
                                demandOption: true,
                                describe: 'Es la base de la tabla de multiplicar'
                            })
                            .option('l', {
                                alias:'listar',
                                default: 'false',
                                type: 'boolean',
                                describe: 'Muestra la tabla en consola'
                            })
                            .option('h', {
                                alias:'hasta',
                                type: 'number',
                                default: 10,
                                describe: 'Multiplica la base hasta este numero'
                            })
                            .check((argv,options) => {
                                if(isNaN(argv.b)){
                                    throw 'La base tiene que ser un numero'
                                }
                                return true;
                            })

            .argv;

module.exports = argv;