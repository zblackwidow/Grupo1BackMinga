import joi from "joi-oid";

export const schemaUpdateReaction = joi.object({
  id: joi.objectId().required().messages({
    "objectid.base": "Invalid ObjectId",
    "any.required": "Reaction ID is required",
  }),
  manga_id: joi.objectId().messages({
    "objectid.base": "Invalid ObjectId",
  }),
  author_id: joi.objectId().messages({
    "objectid.base": "Invalid ObjectId",
  }),
  company_id: joi.objectId().messages({
    "objectid.base": "Invalid ObjectId",
  }),
  reaction: joi.number().min(1).max(4).required().messages({
    "number.base": "Reaction must be a number",
    "number.min": "Reaction must be at least 1",
    "number.max": "Reaction must be at most 4",
    "any.required": "Reaction is required",
  }),
});
