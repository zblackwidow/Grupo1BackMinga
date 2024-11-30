import 'dotenv/config.js'
import '../../config/database.js'
import Author from '../Author.js';

const authors= [
        {
          name: "lucas",
          lastName: "González",
          city: "Bogotá",
          country: "Colombia",
          date: new Date("2024-11-29"), // Fecha actual
          photo: "https://randomuser.me/api/portraits/men/10.jpg", // URL funcional
          user_id: "674a47ab8928728c5192f118",
          active: true,
        },
        {
          name: "eric",
          lastName: "Martínez",
          city: "Madrid",
          country: "España",
          date: new Date("2024-11-28"), // Fecha de ejemplo
          photo: "https://randomuser.me/api/portraits/men/20.jpg", // URL funcional
          user_id: "674a47978928728c5192f114",
          active: true,
        },
        {
          name: "alejandro",
          lastName: "Pérez",
          city: "Buenos Aires",
          country: "Argentina",
          date: new Date("2024-11-27"), // Fecha de ejemplo
          photo: "https://randomuser.me/api/portraits/men/30.jpg", // URL funcional
          user_id: "674a47a48928728c5192f116",
          active: true,
        },
      ];
    
Author.insertMany(authors)
