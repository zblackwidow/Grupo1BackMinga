import Reaction from "../../models/Reaction.js";

const reactionAll = async (req, res, next) => {
  try {
    let reaction = await Reaction.find();
    res.status(200).json({
      success: true,
      message: "Reactions found successfully",
      response: reaction,
    });
  } catch (error) {
    next(error);
  }
};

const reactionById = async (req, res, next) => {
  try {
    let { id } = req.body
    let reaction = await Reaction.findById(id);
    res.status(200).json({
      success: true,
      message: "Reaction found successfully",
      response: reaction,
    });
  } catch (error) {
    next(error);
  }
};

export { reactionAll, reactionById };