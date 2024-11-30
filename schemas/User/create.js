import joi from 'joi-oid'

const schema = joi.object({
    email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.email': 'Please enter a valid email address - .com or .net',
            'any.required': `"email" is a required field`,
        }),
    password: joi.string().required().messages({
        'any.required': `"password" is a required field`,
    }),
    photo: joi.string().required().messages({
        'any.required': `"photo" is a required field`,
    }),
    role: joi
        .number()
        .max(3)
        .min(0)
        .messages({
            'number.max': '"role" Only = 0:user 1:author and 2:company can enter',
            'number.min': '"role" Only = 0:user 1:author and 2:company can enter',
        })
})

export default schema
