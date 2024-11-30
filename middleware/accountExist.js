import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let account = await User.findOne({ email: req.body.email })
        console.log(account);
        if (account) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists'
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}