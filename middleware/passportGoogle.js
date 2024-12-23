import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: "/api/auth/signIn/google/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            
            let hash = bcryptjs.hashSync(profile.id, 10);
             let user = await User.findOne({ email: profile.emails[0].value });
            try {
                if (!user) {
                    user = new User({
                        email: profile.emails[0].value,
                        name: profile.displayName,
                        photo: profile.photos[0].value,
                        role: 0,
                        online: true,
                        password: hash
                    });
                    await user.save();
                }
                return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        }
    )
)
