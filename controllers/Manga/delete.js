import Manga from "../../models/Manga.js";

const deleteManga = async (req, res, next) => {
  try {
    const manga = await Manga.findByIdAndDelete({ _id: req.body.id });
    return res.status(200).json({
      success: true,
      message: "Manga deleted successfully",
      response: manga,
    });
  } catch (error) {
    next(error);
  }
};

export { deleteManga };