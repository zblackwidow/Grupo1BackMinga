import User from '../models/Comment.js'

export default async (req, res, next) => {
    try {
        let account = await User.findOne({ _id: req.body._id })
        if (!account) {
            return res.status(400).json({
                success: false,
                message: 'The ID comment does NOT exist',
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}