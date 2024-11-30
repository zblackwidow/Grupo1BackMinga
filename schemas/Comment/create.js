import joi from 'joi-oid'

const schema = joi.object({
    chapter_id: joi
        .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'string.pattern.base': 'You must enter a valid ObjectId',
            'any.required': `"chapter_id" is a required field`,
        }),
    author_id: joi
        .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'string.pattern.base': 'You must enter a valid ObjectId',
            'any.required': `"author_id" is a required field`,
        }),
    company_id: joi
        .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'string.pattern.base': 'You must enter a valid ObjectId',
            'any.required': `"company_id" is a required field`,
        }),
    message: joi
        .string()
        .pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/)
        .required()
        .min(3)
        .alphanum()
        .messages({
            'string.base': 'Do not use numbers',
            'string.pattern.base': '"message" Do not use numbers and use special characters',
            'string.min': '"message" Must be a minimum of 3 characters',
        }),
})

export default schema


