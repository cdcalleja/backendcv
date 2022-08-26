const res = require('express/lib/response');
const {Experiencia} = require('../models/experiencialaboral');
const {validationResult} = require('express-validator')

const verExperiencia = async(req, res) => {
    const experiencia = await Experiencia.find()
    res.json({experiencia})
}

const verExperienciaId = async (req, res) => {
    const experiencia = await Experiencia.findById(req.params.id)
    res.json({experiencia})
}

const agregarExperiencia = async (req, res) => {
    try {
        const error = validationResult(req)
        if(error.isEmpty()) {
            const{codigo} = req.body;
            const{posicion} = req.body;
            const {empresa} = req.body;
            const {modalidad} = req.body;
            const {inicio} = req.body;
            const {finalizacion} = req.body;
            const{tiempoTrabajado} = req.body;
            const{lugar} = req.body;
            const experiencia = new Experiencia({
                codigo,
                posicion,
                empresa,
                modalidad,
                inicio,
                finalizacion,
                tiempoTrabajado,
                lugar
            });
            await experiencia.save();
            res.status(201).json({
                experiencia,
                msg:'Agregada experriencia laboral'
            })
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({
            msg: 'Error al intentar agregar una experiencia laboral al Curriculum',
            err
        })
    }
}

const editarExperiencia = async(req, res) => {
    const error = validationResult(req);
    if (error.isEmpty()) {
        const {id} = req.params
        const edicion = await Experiencia.findByIdAndUpdate(id, req.body)
        res.status(202).json({name: req.body.name, edicion})
    } else {
        res.status(501).json(error)
    }
}

const borrarExperiencia = async (req, res) => {
    try {
        const experiencia = await Experiencia.findByIdAndDelete(req.params.id);
        res.json({
            msg: 'Se eliminó de la lista la siguiente experiencia laboral:',
            experiencia
        })
    } catch (error) {
        res.status(400).json({
            msg:"Problemas para procesar la información en estos momentos, por favor intente mas tarde"
        })
    }
}

module.exports = {verExperiencia, verExperienciaId, agregarExperiencia, editarExperiencia, borrarExperiencia}