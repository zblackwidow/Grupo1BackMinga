import mongoose from 'mongoose';
import "dotenv/config.js";

let url = process.env.URI_MONGO;

console.log(url);

async function connectDB() {
    try {
        await mongoose.connect(url);
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log(error);
    }
}

connectDB();