const Loyalty =
require("../models/Loyalty");

const getPoints = async (
  req,
  res
) => {
  try {

    const loyalty =
      await Loyalty.findOne({
        user: req.user.id
      });

    res.json(loyalty);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getPoints
};