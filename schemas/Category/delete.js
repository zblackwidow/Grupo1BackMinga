import Joi from "joi";

const deleteCategorySchema = Joi.object({
    id: Joi.string().length(24).required().messages({
        "string.base": "ID must be a string.",
        "string.length": "ID must be exactly 24 characters long.",
        "any.required": "ID is required.",
    }),
});

export default deleteCategorySchema;
