import Joi from "joi-oid";

const deleteCategorySchema = Joi.object({
    _id: Joi.objectId().required().messages({
        "objectid.base": "ID must be a valid ObjectId.",
        "any.required": "ID is required.",
    }),
});

export default deleteCategorySchema;
