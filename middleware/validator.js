 const validator = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.body, {
            abortEarly: false,
        })
    
        if (validation.error) {
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(detail => detail.message)
            })
        }
        return next();
    }
]

<<<<<<<<< Temporary merge branch 1

=========
>>>>>>>>> Temporary merge branch 2
 const validatorParams = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.params, {
            abortEarly: false,
        })
    
        if (validation.error) {
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(detail => detail.message)
            })
        }
        return next();
    }
]

<<<<<<<<< Temporary merge branch 1
export {validator, validatorParams};
=========
export { validator, validatorParams }
>>>>>>>>> Temporary merge branch 2
