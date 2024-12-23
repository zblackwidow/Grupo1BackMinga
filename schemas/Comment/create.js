import joi from 'joi-oid'

const schema = joi.object({
    chapter_id: joi
        .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'string.pattern.base': '"chapter_id" You must enter a valid ObjectId',
            'any.required': `"chapter_id" is a required field`,
        }),
    author_id: joi
        .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
            'string.pattern.base': '"author_id" You must enter a valid ObjectId',
        }),
    company_id: joi
        .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
            'string.pattern.base': '"company_id" You must enter a valid ObjectId',}),
    message: joi
        .string()
        .required()
        .min(3)
        .messages({
            'string.min': '"message" Must be a minimum of 3 characters',
        }),
})

export default schema


