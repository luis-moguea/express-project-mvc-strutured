const Joi = require("joi")

const validateCitizen = (citizens) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        nationality: Joi.string().required()
    });
    return schema.validate(citizens);
}

module.exports = validateCitizen