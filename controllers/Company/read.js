import Company from "../../models/Company.js";

let readAllCompany = async (req, res, next) => {
    try {
        const company = await Company.find();
        return res.status(200).json({ message: "All companies read successfully", response: company });
    }
    catch (error) {
        next(error);
    }
}

let readCompany = async (req, res, next) => {
    try {
        const company = await Company.findById({_id: req.body._id});
        return res.status(200).json({ message: "Company read successfully", response: company });
    }
    catch (error) {
        next(error);
    }
}

export  {readAllCompany, readCompany};