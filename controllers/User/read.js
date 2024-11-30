import User from '../../models/User.js'

let allUser = async (req, res, next) => {
    try {
        let resultado = await User.find()
        if (resultado.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Records found with SUCCESS',
                registers_found: `${resultado.length}`,
                response: resultado,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `No User Record Found in responsebase`,
                registers_found: `${resultado.length}`,
                response: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

let userByID = async (req, res, next) => {
    try {
        let valueID = req.params.valueID
        let resultado = await User.find({ _id: valueID })
        if (resultado.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Record found SUCCESSFULLY',
                registers_found: `${resultado.length}`,
                response: resultado,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `No Record Found in responsebase with: ${valueID}`,
                registers_found: `${resultado.length}`,
                response: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

export { allUser, userByID }