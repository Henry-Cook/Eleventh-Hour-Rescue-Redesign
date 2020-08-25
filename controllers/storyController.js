const Story = require("../models/stories");
const Donation = require("../models/donations");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "connection error:"));

const getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getStory = async (req, res) => {
  try {
    const { id } = req.params;
    const story = await Story.findById(id);
    if (story) {
      return res.json(story);
    }
    res.status(404).json({ message: "not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donation.findById(id);
    if (donation) {
      return res.json(donation);
    }
    res.status(404).json({ message: "not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDonation = async (req, res) => {
  try {
    const donation = await new Donation(req.body);
    await donation.save();
    return res.status(201).json(donation);
  } catch (error) {
    console.log(error);
    return res.status(200).json(donation);
  }
};

const updateStory = async (req, res) => {
  const { id } = req.params;
  await Story.findByIdAndUpdate(id, req.body, { new: true }, (error, story) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!story) {
      return res.status(404).json({ message: "not found" });
    }
    res.status(200).json(story);
  });
};

const deleteDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donation.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("deleted");
    }
    throw new Error("not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getStories,
  getStory,
  getDonation,
  createDonation,
  updateStory,
  deleteDonation,
};
