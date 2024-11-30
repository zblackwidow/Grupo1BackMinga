import Comment from '../../models/Comment.js'

let update = async (req, res, next) => {
    try {
        let result = await Comment.findOneAndUpdate(
            { email: req.body.email },
            req.body,
            { new: true } 
        )
        if (result) {
            return res.status(200).json({
                success: true,
                message: 'Updated Comment with SUCCESS',
                registers_found: `${result._id}`,
                data: result,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `The update was not performed`,
                registers_found: `${result._id}`,
                data: result,
            })
        }
    } catch (error) {
        next(error)
    }
}

export { update }