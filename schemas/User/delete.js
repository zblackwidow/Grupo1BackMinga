import joi from 'joi-oid'

const schema = joi.object({
    email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .messages({
            'string.email': 'Please enter a valid email address - .com or .net',
        }),
})

export default schema
