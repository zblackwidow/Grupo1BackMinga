import joi from "joi-oid";

export const schemaCreateReaction = joi.object({
    manga_id: joi.objectId().required().messages({
        "objectid.base": "Invalid ObjectId",
        "any.required": "Manga ID is required",
    }),
    author_id: joi.objectId().messages({
        "objectid.base": "Invalid ObjectId",
        "any.required": "User ID is required",
    }),
    company_id: joi.objectId().messages({
        "objectid.base": "Invalid ObjectId",
        "any.required": "Company ID is required",
    }),
    reaction: joi.number().min(1).max(4).required().messages({
        "number.base": "Reaction must be a number",
        "number.min": "Reaction must be at least 1",
        "number.max": "Reaction must be at most 4",
        "any.required": "Reaction is required",
    }),
});