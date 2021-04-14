// npm i joi --save //untuk keperluan validasi inputan ketika di submit
const joi = require("joi");
const { router } = require("../app"); // muncul sendiri ketika dipanggil dr /routes/index.js

exports.validate_form = (req, res, next) => {
    const schema = joi.object().keys({
        nama : joi.string().required().max(10), // joi.string/joi.number/joi.password/dll
        hobi : joi.string().required().min(3) 
    })

    joi.validate(req.body,schema).then(validated => next()).catch(err => res.send("Error"))
}