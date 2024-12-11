import Comment from '../../models/Comment.js'

let allComment = async (req, res, next) => {
    try {
        let resultado = await Comment.find().populate('chapter_id', '').populate('author_id', '').populate('company_id', '')
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
                message: `No Comment Record Found in responsebase`,
                registers_found: `${resultado.length}`,
                response: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

let commentByID = async (req, res, next) => {
    try {
        let valueID = req.params.valueID
        let resultado = await Comment.find({ _id: valueID })
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

let commentByChapterId = async (req, res, next) => {
    try {    
        let idQuery = req.params.id
        let comment = await Comment.find({ chapter_id: idQuery }).populate('chapter_id', '').populate('author_id', '').populate('company_id', '')
        return res.status(200).json({
            response: comment
        })
    } catch (error) {
        next(error)
    }
}

export { allComment, commentByID, commentByChapterId }