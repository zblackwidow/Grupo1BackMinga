import 'dotenv/config.js'
import '../../config/database.js'
import Comment from '../Comment.js'

const comments = [
    { 
        chapter_id: '6733a962a28b1a2b12200001',
        author_id: '6733a962a28b1a2b12200002',
        company_id: '6733a962a28b1a2b12200003',
        message: 'Me gusta la manga',
    },
    { 
        chapter_id: '6733a962a28b1a2b12200001',
        author_id: '6733a962a28b1a2b12200002',
        company_id: '6733a962a28b1a2b12200003',
        message: 'Me gusta la manga',
    },
]

Comment.insertMany(comments)