import Chapter from "../../models/Chapter.js";

let allChapters = async (req,res,next) => {
        try {
                
                let {title} = req.query
                let query = {}

                if(title){

                        query.title = {$regex:'^'+title, $options: 'i' }
                }

                let all = await Chapter.find(query).populate('manga_id', '').exec()
                return res.status(200).json({
                        response: all
                })

        } catch (error) {
                next(error)
                
        }
}

let chapterById = async(req, res, next) => {

        try {
                let idQuery = req.params.id
                let chapter = await Chapter.findById(idQuery)
                return res.status(200).json({
                        response: chapter
                })
        } catch (error) {
                next(error)
        }

}

let chapterByIdManga = async(req, res, next) => {

        try {
                let idQuery = req.params.id
                let chapter = await Chapter.findById(idQuery)
                return res.status(200).json({
                        response: chapter
                })
        } catch (error) {
                next(error)
        }

}


export {allChapters, chapterById, chapterByIdManga}