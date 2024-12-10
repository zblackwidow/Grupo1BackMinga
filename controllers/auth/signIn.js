import Author from "../../models/Author.js";
import User from "../../models/User.js";
import Company from "../../models/Company.js";

export default async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate({ email: req.body.email }, { online: true });

    console.log(user.id)
    const userResponse = {
      id: user._id,
      email: req.user.email,
      role: req.user.role,
      photo: req.user.photo,
    };
console.log(" estoy en sagin" + req.user._id);

    if (req.user.role === 1) {
   
      const author = await Author.findOne({ user_id: user._id });
      
        userResponse.author = {
          id: author._id,
          name: author.name,
          lastName: author.lastName,
          city: author.city,
          country: author.country || null,
          birthday: author.birthday,
          photo: author.photo,
          active: author.active,
        
      }
    } else if (req.user.role === 2) {
      const company = await Company.findOne({ user_id: user._id });
     
        userResponse.company = {
          id: company._id,
          name: company.name,
          description: company.description,
          city: company.city,
          country: company.country || null,
          photo: company.photo,
          active: company.active,
   
      }
    }

  
    return res.status(200).json({
      success: true,
      message: "Signed In",
      user: userResponse,
      token: req.token,
    });
  } catch (error) {
    next(error); // Manejo de errores
  }
};
