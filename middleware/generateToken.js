import jwt from "jsonwebtoken";

const generateToken = (req, res, next) => {
  const email = req.body.email || req.user.email;
  const role = 0

  const token = jwt.sign(
    { 
        email: email, 
        role: role 
    }, 
    process.env.SECRET, 
    {
        expiresIn: 60 * 60 * 24,
    }
);
req.token = token;
return next();
};

export default generateToken;
