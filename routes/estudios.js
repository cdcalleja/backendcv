const express = require('express');
const router = express.Router();
const {verEstudios, verEstudioId, agregarEstudio, editarEstudio, borrarEstudio} = require ('../controller/controllerEstudios');
const {check, validationResult, body} = require('express-validator')
const {validarIdEstudio} = require('../middleware/validarIdEstudio')

router.get('/ver', verEstudios);
router.get('/ver/:id', validarIdEstudio, verEstudioId);
router.post('/crear',[
    check("codigo").not().isEmpty().withMessage("campo vacio"),
    check("institucion").not().isEmpty().withMessage("campo vacio").isLength({max: 100, min: 4}),
    check("titulo").not().isEmpty().withMessage("campo vacio").isLength({max: 100, min: 4}),
    check("inicio").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("finalizacion").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
], agregarEstudio);
router.put('/editar/:id', validarIdEstudio, [
    check('codigo').not().isEmpty().withMessage("campo vacio"),
    check('institucion').not().isEmpty().withMessage("campo vacio").isLength({max: 100, min: 1}),
    check('titulo').not().isEmpty().withMessage("campo vacio").isLength({max: 100, min: 1}),
    check('inicio').not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 1}),
    check('finalizacion').not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 1}),
], editarEstudio);
router.delete('/borrar/:id', borrarEstudio)

module.exports = router