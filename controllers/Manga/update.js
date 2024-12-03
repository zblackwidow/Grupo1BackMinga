import Manga from "../../models/Manga.js";

const updateManga = async (req, res, next) => {
    try {
       let manga = req.body;
        let mangaUpdate = await Manga.findByIdAndUpdate({ _id: req.body.id }, manga);
        return res.status(200).json({
            success: true,
            message: "Manga updated successfully",
            response: mangaUpdate,
        });

    } catch (error) {
        next(error);
        
    }
};

export { updateManga };