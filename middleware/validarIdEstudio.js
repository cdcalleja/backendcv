const {Educacion} = require("../models/estudios");

const validarIdEstudio = async (req, res, next) => {
    const estudio = await Educacion.findById(req.params.id)
    if(estudio !== null) {
        next();
    } else {
        res.json({msg: "El id ingresado es erróneo"})
    }
}

module.exports = {validarIdEstudio}