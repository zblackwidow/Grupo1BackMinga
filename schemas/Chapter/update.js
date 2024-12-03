import joi from "joi-oid";

const schema = joi.object({
  _id: joi.objectId().required().messages({
    "objectId.base": "debe pertenecer al id de un autor valido",
  }),

  manga_id: joi.objectId().messages({
    "objectId.base": "debe pertenecer al id de un manga valido",
  }),

  title: joi.string().messages({
    "string.base": "es requerido el titulo del capitulo",
  }),

  cover_photo: joi.string().messages({
    "string.base": "es necesirio ingresar el url de la portada del capitulo",
  }),

  pages: joi
    .array()
    .items(
      joi.string().uri().messages({
        "string.uri": "Cada elemento en 'pages' debe ser un URL válido.",
      })
    )
    .min(1) // Asegura que haya al menos un elemento
    .messages({
      "array.base": "El campo 'pages' debe ser un arreglo.",
      "array.min": "El campo 'pages' debe contener al menos un URL.",
    }),
});

export default schema;
