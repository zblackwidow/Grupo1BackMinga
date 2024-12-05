import User from "../../models/User.js";

export default async(req,res,next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true}
        )
        
        return res.redirect('http://localhost:5173/?token=' + req.token);
    } catch (error) {
       next(error) 
    }
}