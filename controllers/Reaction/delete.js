import Reaction from "../../models/Reaction.js";

const deleteReaction = async (req, res, next) => {
    try {
        let { id } = req.body;
        let reaction = await Reaction.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Reaction deleted successfully",
            response: reaction,
        });
    } catch (error) {
        next(error);
    }
};

export { deleteReaction };