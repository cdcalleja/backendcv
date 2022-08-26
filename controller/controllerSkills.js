const res = require('express/lib/response');
const {Skills} = require('../models/skills');
const {validationResult} = require('express-validator')

const verSkills = async(req, res) => {
    const skills = await Skills.find()
    res.json({skills})
}

const verSkillsId = async (req, res) => {
    const skills = await Skills.findById(req.params.id)
    res.json({skills})
}

const agregarSkill = async (req, res) => {
    try {
        const error = validationResult(req)
        if(error.isEmpty()) {
            const{codigo} = req.body;
            const{nombre} = req.body;
            const {progreso} = req.body;
            
            const skill = new Skills({
                codigo,
                nombre,
                progreso,
            });
            await skill.save();
            res.status(201).json({
                skill,
                msg:'Agregada habilidad'
            })
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({
            msg: 'Error al intentar agregar esta habilidad al Curriculum',
            err
        })
    }
}

const editarSkill = async(req, res) => {
    const error = validationResult(req);
    if (error.isEmpty()) {
        const {id} = req.params
        const edicion = await Skills.findByIdAndUpdate(id, req.body)
        res.status(202).json({name: req.body.name, edicion})
    } else {
        res.status(501).json(error)
    }
}

const borrarSkill = async (req, res) => {
    try {
        const skill = await Skills.findByIdAndDelete(req.params.id);
        res.json({
            msg: 'Se eliminó de la lista la siguiente habilidad:',
            skill
        })
    } catch (error) {
        res.status(400).json({
            msg:"Problemas para procesar la información en estos momentos, por favor intente mas tarde"
        })
    }
}

module.exports = {verSkills, verSkillsId, agregarSkill, editarSkill, borrarSkill}