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
    photo: joi.string().required().uri().messages({
        'any.required': `"photo" is a required field`,
    }),
})

export default schema
