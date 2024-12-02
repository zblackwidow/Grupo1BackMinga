import joi from "joi-oid";

const schemaCompany = joi.object({
    name: joi.string()
        .min(3).max(50)
        .pattern(/^[a-zA-Z\s]+$/)
        .trim()
        .required()
        .messages({
            "string.min": "Name must be at least 3 characters long.",
            "string.max": "Name cannot exceed 50 characters.",
            "string.pattern.base": "Name can only contain letters.",
            "any.required": "Name is required."
        }),
    website: joi.string()
        .uri()
        .messages({
            "string.uri": "Website must be a valid URL."
        }),
    description: joi.string()
        .min(10).max(500)
        .trim()
        .required()
        .messages({
            "string.min": "Description must be at least 10 characters long.",
            "string.max": "Description cannot exceed 500 characters.",
            "any.required": "Description is required."
        }),
    photo: joi.string()
        .uri()
        .required()
        .messages({
            "string.uri": "Photo URL must be valid.",
            "any.required": "Photo is required."
        }),
    user_id: joi.objectId()
        .required()
        .messages({
            "string.pattern.name": "User ID must be a valid ObjectId.",
            "any.required": "User ID is required."
        }),
    active: joi.boolean()
        .default(false)
        .required()
        .messages({
            "boolean.base": "Active must be a boolean value.",
            "any.required": "Active status is required."
        })
});

export default schemaCompany;
