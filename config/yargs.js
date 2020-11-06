
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Completado o Pendiente'
};


const { command } = require('yargs');
const argv = require('yargs')
            .command('crear', 'Crea un elemento por hacer', {
                descripcion
            })
            .command('actualizar', 'Actualiza el estado de una tarea', {
                descripcion,
                completado
            })
            .command('borrar', 'borra una tarea', {
                descripcion
            })
            
            .help()
            .argv;

module.exports = {
    argv
}

