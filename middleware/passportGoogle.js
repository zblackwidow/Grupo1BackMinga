import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            try {
                // Buscar si el usuario está en la Base de Datos
                let user = await User.findOne({ email: profile.emails[0].value });
                if (!user) {
                    // Si no existe, creo uno nuevo
                    user = new User({
                        email: profile.emails[0].value,
                        photo: profile.photos[0].value,
                        online: false,
                        role: 0,
                        password: profile.id
                    });
                    await user.save();
                }

                return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        }
    )
);

export default passport;
