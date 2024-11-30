import Author from "../../models/Author.js";

let create =  async (req, res, next) => {
      try {
        
        let author = req.body
        author.active = true
         
        let all = await Author.create(author)
        return res.status(200).json({
                response: all
        })


      } catch (error) {
        next(error)
      }  
}

export default create