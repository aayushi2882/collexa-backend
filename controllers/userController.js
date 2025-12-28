const User = require("../models/User");

exports.saveInterests = async (req, res) => {
  try {
    const { email, interests } = req.body;

    if (!email || !interests) {
      return res.status(400).json({ message: "Email and interests required" });
    }

    const user = await User.findOneAndUpdate(
      { email },
      { interests },
      { new: true, upsert: true }
    );

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
