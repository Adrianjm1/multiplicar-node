const opt = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 15
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'genera una rchivo con la tabla de multiplicar', opt)
    .help()
    .argv;



module.exports = {
    argv
}