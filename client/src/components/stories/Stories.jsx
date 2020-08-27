import React, { useState, useEffect } from "react";
import { Link, StaticRouter } from "react-router-dom";
import { getStories, getStory, updateStory } from "../../services/stories";
import ActionCard from "../../components/action-card/ActionCard";
import EditStory from '../../components/edit-story/EditStory'
import "./stories.css";

export default function Stories() {
  const [stories, updateStories] = useState([]);
  const [editStory, setEditStory] = useState(false);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await getStories();
      updateStories(response);
    };
    console.log(stories);
    fetchStories();
  }, []);

  return (
    stories.map((story, i) => {
      return (
          <ActionCard
            id={`story${i + 1}`}
            image={`${story.imgURL}`}
            action={story.name}
            detail={story.story}
          />
      );
    })
  );
}
