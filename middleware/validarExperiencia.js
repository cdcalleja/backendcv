const {Expriencia} = require("../models/experiencialaboral");

const validarIdExperiencia = async (req, res, next) => {
    const experiencia = await Expriencia.findById(req.params.id)
    if(experiencia !== null) {
        next();
    } else {
        res.json({msg: "El id ingresado es erróneo"})
    }
}

module.exports = {validarIdExperiencia}