import React, { useState, useEffect } from "react";
import { updateStory, getStory } from "../../services/stories.js";
import "./edit-story.css";

export default function EditStory(props) {
  const [story, setStory] = useState({});

  useEffect(() => {
    const fetchStory = async () => {
      const story = await getStory(props.id);
      setStory(story);
    };
    fetchStory();
  }, {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStory({
      ...story,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = story._id;
    console.log(story);
    console.log(id);
    await updateStory(id, story);
    props.updateBool(true);
  };

  return (
    <div className="edit-story">
      <img src={story.imgURL} />

      <form onSubmit={handleSubmit}>
        <input
          className="story-image-input"
          type="text"
          value={story.imgURL}
          placeholder="Image Link"
          name="imgURL"
          onChange={handleChange}
        />

        <input
          className="story-name-input"
          type="text"
          value={story.name}
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />

        <textarea
          cols="30"
          rows="6"
          maxlength="500"
          value={story.story}
          name="story"
          onChange={handleChange}
        />

        <button className="save-button" type="sumbmit">
          SAVE
        </button>
      </form>
    </div>
  );
}
