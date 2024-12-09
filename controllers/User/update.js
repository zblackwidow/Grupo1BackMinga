import User from '../../models/User.js'

let update = async (req, res, next) => {
    try {
        console.log(req.body);
        let result = await User.findOneAndUpdate(
            { email: req.body.email },
            req.body,
            { new: true } 
        )
         
        console.log(result);
        if (result) {
            return res.status(200).json({
                success: true,
                message: 'Updated User with SUCCESS',
                response: result,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `The update was not performed`,
                response: result,
            })
        }
    } catch (error) {
        next(error)
    }
}

export { update }