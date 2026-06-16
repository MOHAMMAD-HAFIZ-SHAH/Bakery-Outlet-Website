const Outlet = require("../models/Outlet");

const getOutlets = async (
  req,
  res
) => {
  try {
    const outlets =
      await Outlet.find();

    res.json(outlets);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const createOutlet = async (
  req,
  res
) => {
  try {
    const outlet =
      await Outlet.create(req.body);

    res.status(201).json(outlet);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getOutlets,
  createOutlet
};