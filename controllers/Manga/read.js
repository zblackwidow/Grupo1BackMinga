import Manga from "../../models/Manga.js";
import Author from "../../models/Author.js";

const readById = async (req, res, next) => {
  try {
    let { id } = req.params;
    let manga = await Manga.findById(id)
      .populate("author_id", "")
      .populate("company_id", "")
      .populate("category_id", "");
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
    let { title } = req.query;

    let query = {};

    if (title) {
      query.title = { $regex: new RegExp(` ^${title}`, "i") };
    }
    let mangas = await Manga.find(query)
      .populate("author_id", "")
      .populate("company_id", "")
      .populate("category_id", "");
    return res.status(200).json({
      success: true,
      message: "Mangas found successfully",
      response: mangas,
    });
  } catch (error) {
    next(error);
  }
};

const readByAuthor = async (req, res, next) => {
  try {
    const author = req.body.author_id;
    let mangas = await Manga.find({ author_id: author })
      .populate("author_id", "")
      .populate("company_id", "")
      .populate("category_id", "");
    return res.status(200).json({
      success: true,
      message: "Mangas found successfully",
      response: mangas,
    });
  } catch (error) {
    next(error);
    
  }
};

const readByCompany = async (req, res, next) => {
  try {
    const company = req.body.company_id;
    let mangas = await Manga.find({ company_id: company })
      .populate("author_id", "")
      .populate("company_id", "")
      .populate("category_id", "");
    return res.status(200).json({
      success: true,
      message: "Mangas found successfully",
      response: mangas,
    });
  } catch (error) {
    next(error);
  }
};

export { readById, readAll, readByAuthor, readByCompany };
