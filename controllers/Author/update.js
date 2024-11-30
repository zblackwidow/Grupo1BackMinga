import Author from "../../models/Author.js";

const updateAuthor = async (req, res, next) => {
        let author = req.body
        let upd = await Author.updateOne(
                {_id: author._id},
                author
        )
        
        return res.status(200).json({
                response: upd
        })
}

export {updateAuthor}