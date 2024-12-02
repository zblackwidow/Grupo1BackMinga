import User from "../../models/User.js";

export default async(req,res,next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: false}
        )
        console.log(req);
        
        return res.status(200).json({
            success: true,
            message : "Disconnected"
        })

    } catch (error) {
       next(error) 
    }
}