import Category from "../../models/Category.js";

let remove = async (req, res, next) => {
    try {
        let { id } = req.params; // Obtiene el ID desde los parámetros de la URL
        let deletedCategory = await Category.findByIdAndDelete(id); // Elimina la categoría

        if (!deletedCategory) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Category deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

export default remove;
