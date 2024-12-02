import Chapter from "../../models/Chapter.js"

let create = async (req , res , next) => {
try {
                let chapter = req.body
                
                let all = await Chapter.create(chapter)
                return res.status(200).json({
                        response: all
                })


        } catch (error) {
                next(error)
        }

}
export default create