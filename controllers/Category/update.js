import Category from "../../models/Category.js";

let update = async (req, res, next) => {
    try {
        let { id } = req.params; // Obtiene el ID desde los parámetros de la URL
        let data = req.body; // Datos a actualizar
        let updatedCategory = await Category.findByIdAndUpdate(id, data, { new: true }); // Actualiza y devuelve la nueva categoría

        if (!updatedCategory) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Category updated successfully",
            response: updatedCategory,
        });
    } catch (error) {
        next(error);
    }
};

export default update;
