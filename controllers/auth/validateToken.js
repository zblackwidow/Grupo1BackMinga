

const validateToken = async (req, res, next) => {
    try {
      
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authorization header missing or malformed",
            });
        }

        
        const token = authHeader.split(" ")[1]; 

        
        const userResponse = { ...req.user.toObject() };
        delete userResponse.password;

        return res.status(200).json({
            success: true,
            message: "Token valid",
            token: token,
            user: userResponse,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export default validateToken;
