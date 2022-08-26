const express = require('express');
const router = express.Router();
const {verProyectos, verProyectosId, agregarProyecto, borrarProyecto, editarProyecto} = require ('../controller/controllerProyectos');
const {check, validationResult, body} = require('express-validator')
const {validarIdProyecto} = require('../middleware/validarProyecto')

router.get('/ver', verProyectos);
router.get('/ver/:id', validarIdProyecto, verProyectosId);
router.post('/crear',[
    check("codigo").not().isEmpty().withMessage("campo vacio"),
    check("nombre").not().isEmpty().withMessage("campo vacio").isLength({max: 100, min: 4}),
    check("inicio").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("finalizacion").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("descripcion").not().isEmpty().withMessage("campo vacio").isLength({max: 1000, min: 4}),
    check("url").not().isEmpty().withMessage("campo vacio").isLength({max: 1000, min: 4}),
], agregarProyecto);
router.put('/editar/:id', validarIdProyecto, [
    check("codigo").not().isEmpty().withMessage("campo vacio"),
    check("nombre").not().isEmpty().withMessage("campo vacio").isLength({max: 100, min: 4}),
    check("inicio").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("finalizacion").not().isEmpty().withMessage("campo vacio").isLength({max: 20, min: 4}),
    check("descripcion").not().isEmpty().withMessage("campo vacio").isLength({max: 1000, min: 4}),
    check("url").not().isEmpty().withMessage("campo vacio").isLength({max: 1000, min: 4}),
], editarProyecto);
router.delete('/borrar/:id', borrarProyecto)

module.exports = router