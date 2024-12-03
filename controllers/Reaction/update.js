import Reaction from "../../models/Reaction.js";

const updateReaction = async (req, res, next) => {
    try {
        let { id } = req.body;
        await Reaction.findByIdAndUpdate(id, req.body);
        let newReaction = await Reaction.findById(id);
        res.status(200).json({
            success: true,
            message: "Reaction updated successfully",
            response: newReaction,
        });
    } catch (error) {
        next(error);
    }
};

export { updateReaction };