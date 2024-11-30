import joi from "joi-oid";

export const schemaReadManga = joi.object({
    id: joi.objectId().required().messages({
        "objectid.base": "Property must be a valid ObjectId",
        "any.required": "Property is required",
    }),
});