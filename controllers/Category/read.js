import Category from "../../models/Category.js";

let read = async (req, res, next) => {
    try {
        let categories = await Category.find(); // Obtiene todas las categorías
        return res.status(200).json({
            success: true,
            message: "Categories fetched successfully",
            response: categories,
        });
    } catch (error) {
        next(error);
    }
};

export default read;
