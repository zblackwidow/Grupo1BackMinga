import Author from "../../models/Author.js";
import User from "../../models/User.js"

let create =  async (req, res, next) => {
      try {
        
        let author = req.body
        author.active = true

         
        let all = await Author.create(author)
        
        const userId = author.user_id

         const userUpdate= await User.findByIdAndUpdate(
          userId,// Buscar por ID
          {role:1},// Cambiar el rol a 1
          {new: true},// Devolver el documento actualizado
        )
        
        if (!userUpdate) {
          return res.status(400).json({
            message: "No se encontró el usuario para actualizar el rol.",
          
          });
        }
        
        return res.status(200).json({
                response: all,
                message: "Autor creado y rol del usuario actualizado correctamente.",
              })


      } catch (error) {
        next(error)
      }  
}

export default create