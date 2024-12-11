import Author from "../../models/Author.js";
import  "../../models/User.js";


let allAuthors = async(req,res,next) => {
        try {
                
                let {name} = req.query
                
                let query = {}
                
                if (name){
                        query.name = {$regex: '^'+name, $options: 'i'}
                }

                let all = await Author.find(query).populate('user_id', 'email photo role online').exec()
                return res.status(200).json({
                        response: all
                })

        } catch (error) {
                next(error)
        }
}

let authorById = async(req, res, next) => {

        try {
                let idQuery = req.params.id
                let author = await Author.findById(idQuery)
                return res.status(200).json({
                        response: author
                })
        } catch (error) {
                next(error)
        }

}

let authorByUserId = async(req, res, next) => {

        let idUser = req.params.idUser
        try {

                let author = await Author.find({user_id: idUser})
                return res.status(200).json({
                        response: author
                })
        } catch (error) {
                next(error)
        }
}


export  {allAuthors,authorById,authorByUserId}