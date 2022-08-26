const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema ({

    codigo: {
        type: Number,
        required: true,
        unique: true
    },
    posicion: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    modalidad: {
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
    tiempoTrabajado: {
        type: String,
        required: true
    },
    lugar: {
        type: String,
        required: true
    },

})

const Experiencia = mongoose.model('Experiencia', storeSchema);

module.exports = {Experiencia}