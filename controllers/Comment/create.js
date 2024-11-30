import Comment from '../../models/Comment.js'

let create = async (req, res, next) => {
    try {
        let comment = req.body
        comment.online = false
        let all = await Comment.create(comment)
        return res.status(201).json({
            success: true,
            message: 'Comment registered successfully',
            response: all,
        })
    } catch (error) {
        next(error)
    }
}

export { create }