// Middleware para manejar error 400
const error400Handler = (error, req, res, next) => {
        console.log("aqui hay un error"+ error );
    
      if (error.message && error.message.toLowerCase().includes("bad request")) {
        return res.status(400).json({
            success: false,
            message: error.message,
            details: error.details || "Detalles no proporcionados"
        });
    }
    if (error.status === 400) {
        return res.status(400).json({ error:"Internal server error", message: "Algo salio mal" });
    }
  

    next(error);
};
export default error400Handler;