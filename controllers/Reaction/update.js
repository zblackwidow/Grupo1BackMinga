import Reaction from "../../models/Reaction.js";

const updateReaction = async (req, res, next) => {
    try {
        let { id } = req.body;
        let reaction = await Reaction.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            success: true,
            message: "Reaction updated successfully",
            response: reaction,
        });
    } catch (error) {
        next(error);
    }
};

export { updateReaction };