import Company from "../../models/Company.js";

let createCompany = async (req, res, next) => {
    try {
        const company = req.body;
        const newCompany = await Company.create(company);
        return res.status(201).json({message: "Company created successfully", response: newCompany});
    }
    catch (error) {
        next(error);
    }
}


export default createCompany;
