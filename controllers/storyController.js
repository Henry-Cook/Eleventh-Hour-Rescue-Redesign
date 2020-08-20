const Story = require("../models/stories");
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

const createStory = async (req, res) => {
  try {
    const story = await new Story(req.body);
    await story.save();
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(200).json(post);
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

const deleteStory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Story.findByIdAndDelete(id);
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
  createStory,
  updateStory,
  deleteStory,
};
