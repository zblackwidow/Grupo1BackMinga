import User from '../../models/User.js'

let destroy = async (req, res, next) => {
    try {
        let result = await User.findOneAndDelete(
            { email: req.body.email }
        )
        if (result) {
            return res.status(200).json({
                success: true,
                message: 'Deleted User with SUCCESS',
                registers_found: `${result._id}`,
                response: result,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `could not delete User`,
                registers_found: `${result._id}`,
                response: result,
            })
        }
    } catch (error) {
        next(error)
    }
}

export { destroy }