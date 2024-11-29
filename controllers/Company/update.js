import Company from "../../models/Company.js";

let updateActive = async (req, res, next) => {
    try {
        const company = req.body;
        const updatedCompany = await Company.findByIdAndUpdate(
            { _id: company._id },
            {  active: company.active }
        );
        return res.status(200).json({ response: updatedCompany });
    }
    catch (error) {
        next(error);
    }
}
let updateName = async (req, res, next) => {
    try {
        const company = req.body;
        const updatedCompany = await Company.findByIdAndUpdate(
            { _id: company._id },
            {  name: company.name }
        );
        return res.status(200).json({ response: updatedCompany });
    }
    catch (error) {
        next(error);
    }
}
let updateDescription = async (req, res, next) => {
    try {
        const company = req.body;
        const updatedCompany = await Company.findByIdAndUpdate(
            { _id: company._id },
            {  description: company.description }
        );
        return res.status(200).json({ response: updatedCompany });
    }
    catch (error) {
        next(error);
    }
}
let updateWebsite = async (req, res, next) => {
    try {
        const company = req.body;
        const updatedCompany = await Company.findByIdAndUpdate(
            { _id: company._id },
            {  website: company.website }
        );
        return res.status(200).json({ response: updatedCompany });
    }
    catch (error) {
        next(error);
    }
}

let updatePhoto = async (req, res, next) => {
    try {
        const company = req.body;
        const updatedCompany = await Company.findByIdAndUpdate(
            { _id: company._id },
            {  photo: company.photo }
        );
        return res.status(200).json({ response: updatedCompany });
    }
    catch (error) {
        next(error);
    }
}

export {updateActive, updateName, updateDescription, updateWebsite, updatePhoto};