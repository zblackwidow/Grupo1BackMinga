import "dotenv/config.js"
import "../../config/database.js"
import Category from "../Category.js"

const categories = [
  {
    name: "shojo",
    color: "#FFC5C5",
    hover: "#FF99CC",
    description: "Mangas for teenage girls",
    cover_photo: "https://example.com/shojo-cover.jpg",
    character_photo: "https://example.com/shojo-character.jpg",
    admin_id: "674a43ddfdefb141b39f0141"
  },
  {
    name: "shonen",
    color: "#33CC33",
    hover: "#66FF66",
    description: "Mangas for teenage boys",
    cover_photo: "https://example.com/shonen-cover.jpg",
    character_photo: "https://example.com/shonen-character.jpg",
    admin_id: "674a43ddfdefb141b39f0141"
  },
  {
    name: "comics",
    color: "#CCCCCC",
    hover: "#AAAAAA",
    description: "Comics and comics in general",
    cover_photo: "https://example.com/comics-cover.jpg",
    character_photo: "https://example.com/comics-character.jpg",
    admin_id: "674a43ddfdefb141b39f0141"
  },
  {
    name: "seinen",
    color: "#666666",
    hover: "#999999",
    description: "Manga for young adults",
    cover_photo: "https://example.com/seinen-cover.jpg",
    character_photo: "https://example.com/seinen-character.jpg",
    admin_id: "674a43ddfdefb141b39f0141"
  }
];

Category.insertMany(categories);