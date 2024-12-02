import joi from "joi-oid";

const schemaUPDCompany = joi.object({
    _id: joi.objectId().required()
        .messages({
            "string.pattern.name": "ID must be a valid ObjectId.",
            "any.required": "ID is required."
        }),
    name: joi.string().min(3).max(100).pattern(/^[a-zA-Z\s]+$/).trim()
        .messages({
            "string.min": "Name must be at least 3 characters long.",
            "string.max": "Name cannot exceed 100 characters.",
            "string.pattern.base": "Name can only contain letters.",
            "any.required": "Name is required."
        }), 
    website: joi.string().uri()
        .messages({
            "string.uri": "Website must be a valid URL."
        }), 
    description: joi.string().min(10).max(500).trim()
        .messages({
            "string.min": "Description must be at least 10 characters long.",
            "string.max": "Description cannot exceed 500 characters."
        }), 
    photo: joi.string().uri()
        .messages({
            "string.uri": "Photo URL must be valid."
        }), 
    user_id: joi.objectId()
        .messages({
            "string.pattern.name": "User ID must be a valid ObjectId."
        }), 
    active: joi.boolean()
        .messages({
            "boolean.base": "Active must be a boolean value."
        })
});

export default schemaUPDCompany;
