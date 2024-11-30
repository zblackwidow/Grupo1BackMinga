import Category from "../../models/Category.js";

let create = async (req, res, next) => {
    try {
        let category = req.body; 
        let createdCategory = await Category.create(category); 
        return res.status(201).json({
            success: true,
            message: "Category created successfully",
            response: createdCategory,
        });
    } catch (error) {
        next(error); 
    }
};

export default create;
