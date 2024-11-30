const validatorCreate = (schema) => [
    (req,res,next) => {
        const validationCreate = schema.validate(req.body,{abortEarly:false})
        if (validationCreate.error) {
            return res.status(400).json({
                success: false,
                message: validationCreate.error.details.map(error => error.message)
            })
        }
        return next()
    }
]

export default validatorCreate