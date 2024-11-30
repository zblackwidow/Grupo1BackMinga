import joi from 'joi-oid'

const schema = joi.object({
    email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.email': 'Please enter a valid email address - .com or .net',
        }),
    password: joi.string(),
    photo: joi.string(),
    role: joi
        .number()
        .integer()
        .max(3)
        .min(0)
        .messages({
            'number.max': '"role" Only = 0:user 1:author and 2:company can enter',
            'number.min': '"role" Only = 0:user 1:author and 2:company can enter',
        })
})

export default schema
