import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        },
        async (jwt_payload, done) =>{

            try {
                let user = await User.findOne({email:jwt_payload.email})

                if (user) {
                    console.log(user);
                    console.log("se encontro el usuario");
                    
                    
                    return done(null,user)
                }else{
                    console.log("no se encontro el usuario");
                    
                    return done(null,null)
                }    
            } catch (error) {
                console.log(error);
                console.log("no se encontro el usuario");
                
                
                return done(error,null)
            }
        }
        
    )
)