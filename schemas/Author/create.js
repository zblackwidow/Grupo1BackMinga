import joi from "joi-oid";

const schema = joi.object({

    name: joi.string().required().messages({
        'string.base':'es requerido el nombre',
    }),
    lastName: joi.string().required().messages({
        'string.base': "es requerido el apellido"
    }),
    city: joi.string().required().messages({
        'string.base':'verifique que la ciudad ingresada es correcta',
    }),
    country: joi.string().messages({
        'string.base':'verifique que la pais ingresado es correcta',
    }),
    birthday: joi.date().required().messages({
        'date.base':'verifique la fecha ingresada es ccorrecta',
    }),
    photo: joi.string().required().uri().messages({
        'string.base': "por favor ingrese un url para la foto"
    }),
    user_id: joi.objectId().required().messages({
        'objectId.base':'debe pertenecer al id de un usuario valido',
    }),
    active: joi
    .boolean() 
    .messages({
      'boolean.base': "El campo 'active' debe ser verdadero o falso.",
      'any.required': "El campo 'active' es obligatorio."
    })
   
})

export default schema