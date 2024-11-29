import Author from "../../models/Author.js";
import  "../../models/User.js";


let allAuthors = async(req,res,next) => {
        try {
                
                let {name} = req.query
                
                let query = {}
                
                if (name){
                        query.name = {regex: '^'+name, $options: 'i'}
                }

                let all = await Author.find(query).populate('users', 'email photo role online').exec()
                return res.status(200).json({
                        response: all
                })

        } catch (error) {
                next(error)
        }
}

export default allAuthors