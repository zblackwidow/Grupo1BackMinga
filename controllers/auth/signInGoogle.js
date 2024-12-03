import User from "../../models/User.js";

export default async(req,res,next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true}
        )
        
        return res.redirect('http://localhost:5173/MyTineraryJesusVera/home?token=' + req.token); //Modificar la ruta

    } catch (error) {
       next(error) 
    }
}