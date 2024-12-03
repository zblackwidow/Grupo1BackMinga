import Joi from "joi-oid"; // Usamos joi-oid para manejar ObjectId

const createCategorySchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Name is required.",
        "string.empty": "Name cannot be empty.",
    }),
    color: Joi.string()
        .pattern(/^#([A-Fa-f0-9]{6})$/)
        .required()
        .messages({
            "any.required": "Color is required.",
            "string.empty": "Color cannot be empty.",
            "string.pattern.base": "Color must be in hexadecimal format (e.g., #FFFFFF).",
        }),
    hover: Joi.string()
        .pattern(/^#([A-Fa-f0-9]{6})$/)
        .required()
        .messages({
            "any.required": "Hover color is required.",
            "string.empty": "Hover color cannot be empty.",
            "string.pattern.base": "Hover color must be in hexadecimal format (e.g., #FFFFFF).",
        }),
    description: Joi.string().required().messages({
        "any.required": "Description is required.",
        "string.empty": "Description cannot be empty.",
    }),
    cover_photo: Joi.string().uri().required().messages({
        "any.required": "Cover photo URL is required.",
        "string.empty": "Cover photo URL cannot be empty.",
        "string.uri": "Cover photo must be a valid URL.",
    }),
    character_photo: Joi.string().uri().required().messages({
        "any.required": "Character photo URL is required.",
        "string.empty": "Character photo URL cannot be empty.",
        "string.uri": "Character photo must be a valid URL.",
    }),
    admin_id: Joi.objectId().required().messages({
        "objectid.base": "Admin ID must be a valid ObjectId.",
        "any.required": "Admin ID is required.",
    }),
});

export default createCategorySchema;
