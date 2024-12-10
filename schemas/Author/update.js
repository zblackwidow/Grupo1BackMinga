import joi from "joi-oid";

const schema = joi.object({
  id: joi.objectId().required().messages({
    "any.required": "El id es requerido.",
    "objectId.base": "Debe pertenecer al id de un autor válido."
  }),
  name: joi.string().regex(/^[a-zA-Z\s]+$/).required().messages({
    "any.required": "El nombre es requerido.",
    "string.empty": "El nombre no puede estar vacío.",
    "string.pattern.base": "El nombre no puede contener números ni caracteres especiales."
  }),
  lastName: joi.string().regex(/^[a-zA-Z\s]+$/).required().messages({
    "any.required": "El apellido es requerido.",
    "string.empty": "El apellido no puede estar vacío.",
    "string.pattern.base": "El apellido no puede contener números ni caracteres especiales."
  }),
  city: joi.string().required().messages({
    "any.required": "La ciudad es requerida.",
    "string.empty": "La ciudad no puede estar vacía.",
    "string.base": "Verifique que la ciudad ingresada es correcta."
  }),
  country: joi.string().messages({
    "string.base": "Verifique que el país ingresado es correcto.",
  }),
  birthday: joi.date().required().messages({
    "any.required": "La fecha de cumpleaños es requerida.",
    "date.base": "Verifique que la fecha ingresada es correcta."
  }),
  photo: joi.string().uri().required().messages({
    "any.required": "La URL de la foto es requerida.",
    "string.empty": "La URL de la foto no puede estar vacía.",
    "string.uri": "Por favor ingrese una URL válida para la foto."
  }),
  user_id: joi.objectId().required().messages({
    "any.required": "El ID de usuario es requerido.",
    "objectId.base": "Debe pertenecer al ID de un usuario válido."
  }),
  active: joi.boolean().messages({
    "boolean.base": "El campo 'active' debe ser verdadero o falso."
  })
});

export default schema;
