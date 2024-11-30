import Author from "../../models/Author.js";

let deleteAuthor = async (req, res, next) => {
        try {
                let deleteAuthor = await Author.deleteOne({
                         _id: req.body._id 
                })

                return res.status(200).json({
                        response: deleteAuthor
                    })  

        } catch (error) {
              next(error);  
        }
}

export {deleteAuthor}