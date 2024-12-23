import Reaction from "../../models/Reaction.js";


const createReaction = async (req, res, next) => {
   console.log(req.body)
   console.log(req)
    try {
        let reaction = await Reaction.create(req.body);
        res.status(200).json({
            success: true,
            message: "Reaction created successfully",
            response: reaction,
        });
    } catch (error) {
        next(error);
    }
};

export { createReaction };