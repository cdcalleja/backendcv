const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema ({

    codigo: {
        type: Number,
        required: true,
        unique: true
    },
    institucion: {
        type: String,
        required: true
    },
    titulo: {
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

})

const Educacion = mongoose.model('Educacion', storeSchema);

module.exports = {Educacion}