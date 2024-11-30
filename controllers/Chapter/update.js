import Chapter from "../../models/Chapter"

const updateChapter = async (req, res, next) => {
        let chapter = req.body
        let upd = await Chapter.updateOne(
                {_id: chapter._id},
                chapter
        )
        
        return res.status(200).json({
                response: upd
        })
}

export {updateChapter}