import Joi from "joi";

const updateCategorySchema = Joi.object({
    name: Joi.string().min(3).max(50).messages({
        "string.min": "Name must have at least 3 characters.",
        "string.max": "Name must have at most 50 characters.",
    }).optional(),
    color: Joi.string()
        .pattern(/^#([A-Fa-f0-9]{6})$/)
        .messages({
            "string.pattern.base": "Color must be in hexadecimal format (e.g., #FFFFFF).",
        })
        .optional(),
    hover: Joi.string()
        .pattern(/^#([A-Fa-f0-9]{6})$/)
        .messages({
            "string.pattern.base": "Hover color must be in hexadecimal format (e.g., #FFFFFF).",
        })
        .optional(),
    description: Joi.string().min(10).max(255).messages({
        "string.min": "Description must have at least 10 characters.",
        "string.max": "Description must have at most 255 characters.",
    }).optional(),
    cover_photo: Joi.string().uri().messages({
        "string.uri": "Cover photo must be a valid URL.",
    }).optional(),
    character_photo: Joi.string().uri().messages({
        "string.uri": "Character photo must be a valid URL.",
    }).optional(),
    admin_id: Joi.string()
        .pattern(/^[a-fA-F0-9]{24}$/)
        .messages({
            "string.pattern.base": "Admin ID must be a valid ObjectId.",
        })
        .optional(),
}).messages({
    "any.unknown": "Field {#label} is not allowed.",
});

export default updateCategorySchema;
