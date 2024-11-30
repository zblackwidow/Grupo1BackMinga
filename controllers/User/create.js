import User from '../../models/User.js'

let create = async (req, res, next) => {
    try {
        let user = req.body
        user.online = false
        let all = await User.create(user)
        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            response: all,
        })
    } catch (error) {
        next(error)
    }
}

export { create }