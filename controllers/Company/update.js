import Company from "../../models/Company.js";

const updateCompany = async (req, res, next) => {
    let company = req.body;
    let upd = await Company.updateOne(
        { _id: company._id },
        company
    );
    return res.status(200).json({
        response: upd
    });
};

export { updateCompany };