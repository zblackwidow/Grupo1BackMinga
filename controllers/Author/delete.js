import Author from '../../models/Author.js'
import User from '../../models/User.js'

let deleteAuthor = async (req, res, next) => {
    try {
        let datos = req.body
        console.log(req.body+"7");
        console.log(req.body._id+"8")
        console.log(req.body.user_id+"9")

        let deleteAuthor = await Author.findOneAndDelete({ _id: req.body._id })

        console.log(deleteAuthor+"13");

        const userId = req.body.user_id

        const userUpdate = await User.findByIdAndUpdate(
            userId, // Buscar por ID
            { role: 0 } // Cambiar el rol a 1
        )

        console.log(userUpdate+"22");

        return res.status(200).json({
            response: deleteAuthor,
        })
    } catch (error) {
        next(error)
    }
}

export { deleteAuthor }
