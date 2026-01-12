const User = require("../models/userModels");

const createuser = async (req, res) => {
  try {
    const { name, email, password, gender } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      gender,
    });
    res.status(201).json({
      message: "user successfully created",
      code: 201,
      data: user,
    });
  } catch (error) {
    console.log(error);

    res.status(404).json({
      message: "user not created",
      code: 404,
      error: error.message,
    });
  }
};

const getuser = async (req, res) => {
  try {
    const user = await User.find();
    // if (!user) return res.status(404).json({ message: "User not found", code: 404 })

    res.status(200).json({
      code: 200,
      message: "user get fetched",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "user not fetched",
      error: error.message,
    });
  }
};

const patchuser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({
      message: "user Updated succesfully",
      code: 200,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      code: 500,
    });
  }
};

const deluser = async (req, res) => {
  try {
    const { ids } = req.body;
    const user = await User.deleteMany({_id:ids});
    res.status(200).json({
      message: "user deleted succesfully",
      code: 200,
      data: user,
    });
    for (let id in ids) {
    }
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      code: 500,
    });
  }
};

module.exports = {
  createuser,
  getuser,
  patchuser,
  deluser,
};
