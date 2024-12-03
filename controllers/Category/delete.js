import Category from "../../models/Category.js";

let remove = async (req, res, next) => {
    try {
            let deleteCategory = await Category.deleteOne({
                     _id: req.body._id 
            })

            return res.status(200).json({
                    response: deleteCategory
                })  

    } catch (error) {
          next(error);  
    }
}

export default remove;
