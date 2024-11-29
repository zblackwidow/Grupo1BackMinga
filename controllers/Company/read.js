import Company from "../../models/Company.js";

let readAllCompany = async (req, res, next) => {
    try {
        const company = await Company.find();
        return res.status(200).json({ response: company });
    }
    catch (error) {
        next(error);
    }
}

export default readAllCompany;