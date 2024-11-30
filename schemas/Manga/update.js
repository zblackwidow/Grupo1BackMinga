import joi from "joi-oid";

export const schemaUpdateManga = joi.object({
  title: joi.string().optional().messages({
    "string.empty": "Title cannot be empty",
  }),
  cover_photo: joi.string().uri().optional().messages({
    "string.empty": "Image URL cannot be empty",
    "string.uri": "Invalid image URL",
  }),
  description: joi.string().optional().messages({
    "string.empty": "Description cannot be empty",
  }),
  author_id: joi.objectId().optional().messages({
    "objectid.base": "Invalid ObjectId",
  }),
  company_id: joi.objectId().optional().messages({
    "objectid.base": "Invalid ObjectId",
  }),
  category_id: joi.objectId().optional().messages({
    "objectid.base": "Invalid ObjectId",
  }),
});