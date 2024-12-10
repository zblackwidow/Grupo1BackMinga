import joi from "joi-oid";

const schema = joi.object({

  manga_id: joi.objectId().required().messages({
    "objectId.base": "debe pertenecer al id de un manga valido",
  }),

  title: joi.string().required().messages({
    "string.base": "es requerido el titulo del capitulo",
  }),

  cover_photo: joi.string().required().messages({
    "string.base": "es necesirio ingresar el url de la portada del capitulo",
  }),

  pages: joi
    .array()
    .items(
      joi
        .string()
        .uri()
        .messages({
          "string.uri": "Cada elemento en 'pages' debe ser un URL válido.",
        })
    )
    .min(1)
    .required()
    .messages({
      "array.base": "El campo 'pages' debe ser un arreglo.",
      "array.min": "El campo 'pages' debe contener al menos un URL.",
    }),
  });

export default schema;
