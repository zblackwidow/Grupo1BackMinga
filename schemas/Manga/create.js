import joi from "joi-oid";

export const schemaCreateManga = joi.object({
  title: joi.string().required().messages({
    "string.empty": "Title cannot be empty",
    "any.required": "Title is required",
  }),
  cover_photo: joi.string().uri().required().messages({
    "string.empty": "Image URL cannot be empty",
    "any.required": "Image URL is required",
    "string.uri": "Invalid image URL",
  }),
  description: joi.string().required().messages({
    "string.empty": "Description cannot be empty",
    "any.required": "Description is required",
  }),
  author_id: joi.objectId().optional().messages({
    "objectid.base": "Invalid ObjectId",
    "any.required": "Author ID is required",
  }),
  company_id: joi.objectId().optional().messages({
    "objectid.base": "Invalid ObjectId",
    "any.required": "Company ID is required",
  }),
  category_id: joi.objectId().required().messages({
    "objectid.base": "Invalid ObjectId",
    "any.required": "Category ID is required",
  }),
});