const error500handler = (error, req, res, next) => {
    if (error.status === 500) {
        return res.status(500).json({ error:"Internal server error", message: "Algo salio mal" });
    }
    next(error);
};

export default error500handler;