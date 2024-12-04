import User from '../models/User.js'

import bcryptjs from 'bcryptjs'

// export default async (req, res, next) => {
//     try {
//         console.log(req.body.user_id)
//        let resultado = await User.find({ _id: req.body.user_id })
//        console.log(resultado[0].role)
//        if (resultado[0].role !== 1) {
//                  return res.status(400).json({
//                 success: false,
//                 message: 'The role its not authorized ',
//             })

//        }
//        next()
        
//     } catch (error) {
//         next(error)
//     }
// }



export default (req, res, next) => {
    let roleDB = req.user.role

    
    if (roleDB < 1 ) {
        return res.status(400).json({
                success: false,
                message: 'The role its not authorized ',
                })
        }
        next()
}
