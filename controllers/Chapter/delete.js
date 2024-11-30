import Chapter from "../../models/Chapter.js";

let deleteChapter = async (req, res, next) => {
        try {
                let deleteChapter = await Chapter.deleteOne({
                         _id: req.body._id 
                })

                return res.status(200).json({
                        response: deleteChapter
                    })  

        } catch (error) {
              next(error);  
        }
}

export {deleteChapter}