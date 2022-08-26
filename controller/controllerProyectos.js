const res = require('express/lib/response');
const {Proyectos} = require('../models/proyectos');
const {validationResult} = require('express-validator')

const verProyectos = async(req, res) => {
    const proyectos = await Proyectos.find()
    res.json({proyectos})
}

const verProyectosId = async (req, res) => {
    const proyectos = await Proyectos.findById(req.params.id)
    res.json({proyectos})
}

const agregarProyecto = async (req, res) => {
    try {
        const error = validationResult(req)
        if(error.isEmpty()) {
            const{codigo} = req.body;
            const{nombre} = req.body;
            const {inicio} = req.body;
            const {finalizacion} = req.body;
            const {descripcion} = req.body;
            const {url} = req.body;
            const proyecto = new Proyectos({
                codigo,
                nombre,
                inicio,
                finalizacion,
                descripcion,
                url
            });
            await proyecto.save();
            res.status(201).json({
                proyecto,
                msg:'Agregado proyecto'
            })
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({
            msg: 'Error al intentar agregar un proyecto al Curriculum',
            err
        })
    }
}

const editarProyecto = async(req, res) => {
    const error = validationResult(req);
    if (error.isEmpty()) {
        const {id} = req.params
        const edicion = await Proyectos.findByIdAndUpdate(id, req.body)
        res.status(202).json({name: req.body.name, edicion})
    } else {
        res.status(501).json(error)
    }
}

const borrarProyecto = async (req, res) => {
    try {
        const proyecto = await Proyectos.findByIdAndDelete(req.params.id);
        res.json({
            msg: 'Se eliminó de la lista al siguiente proyecto:',
            proyecto
        })
    } catch (error) {
        res.status(400).json({
            msg:"Problemas para procesar la información en estos momentos, por favor intente mas tarde"
        })
    }
}

module.exports = {verProyectos, verProyectosId, agregarProyecto, editarProyecto, borrarProyecto}