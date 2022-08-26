const express = require('express');
const router = express.Router();
const {verExperiencia, verExperienciaId, agregarExperiencia, borrarExperiencia, editarExperiencia} = require ('../controller/controllerExpLaboral');
const {check, validationResult, body} = require('express-validator')
const {validarIdExperiencia} = require('../middleware/validarExperiencia')

router.get('/ver', verExperiencia);
router.get('/ver/:id', validarIdExperiencia, verExperienciaId);
router.post('/crear',[
    check("codigo").not().isEmpty().withMessage("campo vacio"),
    check("posicion").not().isEmpty().withMessage("campo vacio").isLength({max: 100, min: 4}),
    check("empresa").not().isEmpty().withMessage("campo vacio").isLength({max: 100, min: 4}),
    check("modalidad").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("inicio").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("finalizacion").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("tiempoTrabajado").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("lugar").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
], agregarExperiencia);
router.put('/editar/:id', validarIdExperiencia, [
    check("codigo").not().isEmpty().withMessage("campo vacio"),
    check("posicion").not().isEmpty().withMessage("campo vacio").isLength({max: 100, min: 4}),
    check("empresa").not().isEmpty().withMessage("campo vacio").isLength({max: 100, min: 4}),
    check("modalidad").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("inicio").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("finalizacion").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("tiempoTrabajado").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("lugar").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
], editarExperiencia);
router.delete('/borrar/:id', borrarExperiencia)

module.exports = router