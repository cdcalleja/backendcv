const res = require('express/lib/response');
const {Educacion} = require('../models/estudios');
const {validationResult} = require('express-validator')

const verEstudios = async(req, res) => {
    const estudios = await Educacion.find()
    res.json({estudios})
}

const verEstudioId = async (req, res) => {
    const estudio = await Educacion.findById(req.params.id)
    res.json({estudio})
}

const agregarEstudio = async (req, res) => {
    try {
        const error = validationResult(req)
        if(error.isEmpty()) {
            const{codigo} = req.body;
            const{institucion} = req.body;
            const {titulo} = req.body;
            const {inicio} = req.body;
            const {finalizacion} = req.body;
            const estudio = new Educacion({
                codigo,
                institucion,
                titulo,
                inicio,
                finalizacion
            });
            await estudio.save();
            res.status(201).json({
                estudio,
                msg:'Agregado estudio'
            })
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({
            msg: 'Error al intentar agregar un estudio al Curriculum',
            err
        })
    }
}

const editarEstudio = async(req, res) => {
    const error = validationResult(req);
    if (error.isEmpty()) {
        const {id} = req.params
        const edicion = await Educacion.findByIdAndUpdate(id, req.body)
        res.status(202).json({name: req.body.name, edicion})
    } else {
        res.status(501).json(error)
    }
}

const borrarEstudio = async (req, res) => {
    try {
        const estudio = await Educacion.findByIdAndDelete(req.params.id);
        res.json({
            msg: 'Se eliminó de la lista al siguiente estudio:',
            estudio
        })
    } catch (error) {
        res.status(400).json({
            msg:"Problemas para procesar la información en estos momentos, por favor intente mas tarde"
        })
    }
}

module.exports = {verEstudios, verEstudioId, agregarEstudio, editarEstudio, borrarEstudio}