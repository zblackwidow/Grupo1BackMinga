

const validateToken = async (req, res, next) => {
    try {
        const userResponse = { ... req.user.toObject() };
        delete userResponse.password;
      console.log("esotoy en validate token" +" " +{userResponse});
      
        

        return res.status(200).json({
            success: true,
            message: "Token valid",
            user: userResponse,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export default validateToken