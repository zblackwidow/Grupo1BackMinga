import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().regex(/^[a-zA-Z\s]+$/).required().messages({
        "any.required": "Name is required.",
        "string.empty": "Name cannot be empty.",
        "string.pattern.base": "Name cannot contain numbers or special characters."
    }),
    lastName: joi.string().regex(/^[a-zA-Z\s]+$/).required().messages({
        'any.required': "Last name is required.",
        'string.empty': "Last name cannot be empty.",
        'string.pattern.base': "Last name cannot contain numbers or special characters."
    }),
    city: joi.string().required().messages({
        'any.required': 'City is required.',
        'string.empty': "City cannot be empty.",
        'string.base': 'City must be a string.',
        'string.min': 'City should have a minimum length of 3 characters.'
    }),
    country: joi.string().messages({
        'string.base': 'Country must be a string.',
        'string.min': 'Country should have a minimum length of 3 characters.',
    }),
    birthday: joi.date().required().messages({
        'any.required': 'Birthday is required.',
        'date.base': 'Please provide a valid date.',
    }),
    photo: joi.string().required().uri().messages({
        'any.required': "Photo URL is required.",
        'string.empty': "Photo URL cannot be empty.",
        'string.uri': "Please provide a valid URL for the photo."
    }),
    user_id: joi.objectId().required().messages({
        'any.required': 'User ID is required.',
        'objectId.base': 'Please provide a valid user ID.'
    }),
    active: joi.boolean().messages({
        'boolean.base': "The 'active' field must be true or false.",
        'any.required': "The 'active' field is required."
    })
});

export default schema;
