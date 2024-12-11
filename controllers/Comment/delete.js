import Comment from '../../models/Comment.js'

let destroy = async (req, res, next) => {
    try {
        
        let result = await Comment.findOneAndDelete(
            { _id: req.params.id }
        )
        
        if (result) {
            return res.status(200).json({
                success: true,
                message: 'Deleted Comment with SUCCESS',
                registers_found: `${result._id}`,
                response: result,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `could not delete Comment`,
                response: result,
            })
        }
    } catch (error) {
        next(error)
    }
}

export { destroy }