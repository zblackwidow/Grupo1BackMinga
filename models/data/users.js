import 'dotenv/config.js'
import '../../config/conexionDataBase.js'
import User from '../User.js'

const users = [
    { 
        email: 'pedro@example.com',
        password: 'pass123',
        photo: 'https://media.istockphoto.com/id/647830296/es/foto/hombre-con-una-expresi%C3%B3n-seria.jpg?s=612x612&w=0&k=20&c=8m3NP6BdlxBHDGWJccRkHA2mtbp9gOHzZeDcVyBVKFk=',
        role: 'admin',
        online: false
    },
    { 
        email: 'juan@example.com',
        password: 'pass123',
        photo: 'https://static.vecteezy.com/system/resources/previews/048/888/157/non_2x/portrait-of-a-young-man-with-a-serious-expression-photo.jpg',
        role: 'user',
        online: false
    }
]

User.insertMany(users)