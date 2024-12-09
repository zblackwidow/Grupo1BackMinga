import Company from "../../models/Company.js";
import User from "../../models/User.js";

let createCompany = async (req, res, next) => {
    try {
        const company = req.body;
         company.active = true

        const newCompany = await Company.create(company);
       
        const userId = company.user_id

        console.log(userId)
        const userUpdate= await User.findByIdAndUpdate(
         userId,// Buscar por ID
         {role:2},// Cambiar el rol a 1
         {new: true},// Devolver el documento actualizado
       )
       
       if (!userUpdate) {
         return res.status(400).json({
           message: "No se encontró el usuario para actualizar el rol.",
         
         });
       }
   
        return res.status(201).json({message: "Company created successfully", response: newCompany});
   
    }
    catch (error) {
        next(error);
    }
}


export default createCompany;
