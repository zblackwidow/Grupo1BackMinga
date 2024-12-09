import User from '../../models/User.js'

let create = async (req, res, next) => {
    try {
        let user = req.body
      console.log(user)
        user.role = 0
        user.online = false
      
        let all = await User.create(user)
        return res.status(201).json({
            
            success: true,
            message: 'User registered successfully',
          
            token: req.token,
            response: all,
        })
    } catch (error) {
        next(error)
    }
}

export { create }