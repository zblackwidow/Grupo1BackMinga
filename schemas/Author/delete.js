import joi from "joi-oid";

const schema = joi.object({
    _id: joi.objectId().required().messages({
        'objectId.base':'debe pertenecer al id de un autor valido',
    }),
    user_id: joi.objectId().required().messages({
        'objectId.base':'debe pertenecer al id de un autor valido',
    }),

       
})

export default schema