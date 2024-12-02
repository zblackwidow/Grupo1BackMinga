import joi from "joi-oid";

const schemaDeleteCompany = joi.object({
    _id: joi.objectId().required()
});

export default schemaDeleteCompany;
