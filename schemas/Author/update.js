import joi from "joi-oid";

const schema = joi.object({
  _id: joi.objectId().required().messages({
    "objectId.base": "debe pertenecer al id de un autor valido",
  }),

  name: joi.string().messages({
    "string.base": "es requerido el nombre",
  }),
  lastName: joi.string().messages({
    "string.base": "es requerido el apellido",
  }),
  city: joi.string().messages({
    "string.base": "verifique que la ciudad ingresada es correcta",
  }),
  country: joi.string().messages({
    "string.base": "verifique que la pais ingresado es correcta",
  }),

  date: joi.date().messages({
    "string.base": "verifique la fecha ingresada es ccorrecta",
  }),

  photo: joi.string().uri().messages({
    "string.base": "por favor ingrese un url para la foto",
  }),
});

export default schema;
