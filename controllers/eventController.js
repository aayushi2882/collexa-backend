const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, college, tags, createdBy } = req.body;

    if (!title || !description || !date || !college || !tags || !createdBy) {
      return res.status(400).json({ message: "All fields required" });
    }

    const event = await Event.create({
      title,
      description,
      date,
      college,
      tags,
      createdBy,
    });

    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
