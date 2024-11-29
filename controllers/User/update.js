import User from '../../models/User.js'

let update = async (req, res, next) => {
    try {
        let result = await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true } 
        )
        if (result) {
            return res.status(200).json({
                success: true,
                message: 'Updated User with SUCCESS',
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