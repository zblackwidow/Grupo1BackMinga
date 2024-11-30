import Manga from "../../models/Manga.js";

const createManga = async (req, res, next) => {
  try {
    let newManga = await Manga.create({
      title: req.body.title,
      cover_photo: req.body.cover_photo,
      description: req.body.description,
      author_id: req.body.author_id || null,
      company_id: req.body.company_id,
      category_id: req.body.category_id || null,
    });

    return res.status(201).json({
      success: true,
      message: "Manga created successfully",
      response: newManga,
    });
  } catch (error) {
    next(error);
  }
};

export { createManga };
