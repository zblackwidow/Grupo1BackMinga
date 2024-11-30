import User from "../models/Comment.js";

export default async (req, res, next) => {
    try {
        let account = await User.findOne({ _id: req.body._id })
        if (account) {
            return res.status(400).json({
                success: false,
                message: 'Comment already exists'
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}