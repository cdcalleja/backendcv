const express = require('express');
const router = express.Router();
const {agregarSkill, borrarSkill, editarSkill, verSkills, verSkillsId} = require ('../controller/controllerSkills');
const {check, validationResult, body} = require('express-validator')
const {validarIdSkill} = require('../middleware/validarSkill')

router.get('/ver', verSkills);
router.get('/ver/:id', validarIdSkill, verSkillsId);
router.post('/crear',[
    check("codigo").not().isEmpty().withMessage("campo vacio"),
    check("nombre").not().isEmpty().withMessage("campo vacio").isLength({max: 100, min: 1}),
    check("progreso").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 1}),
], agregarSkill);
router.put('/editar/:id', validarIdSkill, [
    check("codigo").not().isEmpty().withMessage("campo vacio"),
    check("nombre").not().isEmpty().withMessage("campo vacio").isLength({max: 100, min: 1}),
    check("progreso").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 1}),
], editarSkill);
router.delete('/borrar/:id', borrarSkill)

module.exports = router