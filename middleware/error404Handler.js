const error404handler = (error, req, res, next) => {
    if (error.status === 400) {
        return res.status(400).json({ error:"Bad request", message: "Algo salio mal" });
    }
    next(error);
};

export default error404handler;
