const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema ({

    codigo: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    inicio: {
        type: String,
        required: true
    },
    finalizacion: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },

})

const Proyectos = mongoose.model('Proyectos', storeSchema);

module.exports = {Proyectos}