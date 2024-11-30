import Manga from "../../models/Manga.js";

const readById = async (req, res, next) => {
  try {
    let { id } = req.params;
    let manga = await Manga.findById(id);
    return res.status(200).json({
      success: true,
      message: "Manga found successfully",
      response: manga,
    });
  } catch (error) {
    next(error);
  }
};

const readAll = async (req, res, next) => {
  try {
    let mangas = await Manga.find();
    return res.status(200).json({
      success: true,
      message: "Mangas found successfully",
      response: mangas,
    });
  } catch (error) {
    next(error);
  }
};

export { readById, readAll };
