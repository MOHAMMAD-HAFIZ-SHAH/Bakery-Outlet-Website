const MenuItem = require("../models/MenuItem");

const getMenu = async (req, res) => {
  try {
    const menu =
      await MenuItem.find()
      .populate("outlets");

    res.json(menu);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const createMenuItem = async (
  req,
  res
) => {
  try {

    const image =
      req.file
        ? req.file.filename
        : "";

    const item =
      await MenuItem.create({
        ...req.body,
        image
      });

    res.status(201).json(item);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getMenu,
  createMenuItem
};