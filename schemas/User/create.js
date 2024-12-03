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
    password: joi.string().required().min(8).max(50).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!*%+?&])[A-Za-z\d@$!%?&+*]{8,50}$/).messages({
        'string.pattern.base': '"password" Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (@, $, !, %, *, ?, &, +)',
        'string.min': '"password" Password must contain at least 8 characters',
        'string.max': '"password" Password cannot exceed 50 characters',
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
