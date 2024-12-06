import Author from "../../models/Author.js";

const updateAuthor = async (req, res, next) => {
        let author = req.body
        let upd = await Author.findByIdAndUpdate(
                {_id: author._id},
                author,
                {new: true}
        )
        
        return res.status(200).json({
                response: upd
        })
}

export {updateAuthor}