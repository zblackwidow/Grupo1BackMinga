import Company from "../../models/Company.js";

let updateCompany = async (req, res, next) => {
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
export default updateCompany;