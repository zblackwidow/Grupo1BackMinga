import Company from "../Company.js";
import "dotenv/config.js";
import "../../config/database.js";

 const companies = [
    {
        name: "Electronics",
        description: "Electronics",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bestbuy.com%2Fshop-all-about%2F&psig=AOvVaw2-9-7-1-8-3-0-2&ust=1675022888002000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDr4z9z4CFFQAAAAAdAAAAABAD&url=https%3A%2F%2Fwww.bestbuy.com%2Fshop-all-about%2F&psig=AOvVaw2-9-7-1-8-3-0-2&ust=1675022888002000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDr4z9z4CFFQAAAAAdAAAAABAD",
        website: "https://www.bestbuy.com/shop-all-about",
        active: true,    
        user_id: "5f8d9f6b0a1c2c1a0e1b1d1e"
    }
]

Company.insertMany(companies);