const validatorUpdate = (schema) => [
    (req, res, next) => {
        const validationUpdate = schema.validate(req.body, { abortEarly: false })
        if (validationUpdate.error) {
            return res.status(400).json({
                success: false,
                message: validationUpdate.error.details.map((error) => error.message),
            })
        }
        return next()
    },
]

export default validatorUpdate
