const {Skills} = require("../models/skills");

const validarIdSkill = async (req, res, next) => {
    const skill = await Skills.findById(req.params.id)
    if(skill !== null) {
        next();
    } else {
        res.json({msg: "El id ingresado es erróneo"})
    }
}

module.exports = {validarIdSkill}