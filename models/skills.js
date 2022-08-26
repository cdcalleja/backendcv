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
    progreso: {
        type: Number,
        required: true
    },
})

const Skills = mongoose.model('Skills', storeSchema);

module.exports = {Skills}