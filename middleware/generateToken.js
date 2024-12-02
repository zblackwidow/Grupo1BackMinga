import jwt from "jsonwebtoken";

const generateToken = (req, res, next) => {
  const email = req.body.email;
  const role = req.body.role;

  const token = jwt.sign(
    { 
        email: email, 
        role: role 
    }, 
    process.env.SECRET, 
    {
        expiresIn: 60 * 60,
    }
);
req.token = token;
return next();
};

export default generateToken;
