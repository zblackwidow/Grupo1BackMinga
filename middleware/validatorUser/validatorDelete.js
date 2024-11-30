const validatorDelete = (schema) => [
    (req,res,next) => {
        const validationDelete = schema.validate(req.body,{abortEarly:false})
        if (validationDelete.error) {
            return res.status(400).json({
                success: false,
                message: validationDelete.error.details.map(error => error.message)
            })
        }
        return next()
    }
]

export default validatorDelete