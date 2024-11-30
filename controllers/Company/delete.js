import Company from "../../models/Company.js";

// borrar una propiedad
const deleteCompany = async (req, res, next) => {
    try {
        const company = await Company.findByIdAndDelete(
            { _id: req.body._id }
        )
        return res.status(200).json({ message: "Company deleted successfully", response: company });
    }
    catch (error) {
        next(error);
    }
}

export default deleteCompany;