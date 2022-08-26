const {Proyectos} = require("../models/proyectos");

const validarIdProyecto = async (req, res, next) => {
    const proyecto = await Proyectos.findById(req.params.id)
    if(proyecto !== null) {
        next();
    } else {
        res.json({msg: "El id ingresado es erróneo"})
    }
}

module.exports = {validarIdProyecto}