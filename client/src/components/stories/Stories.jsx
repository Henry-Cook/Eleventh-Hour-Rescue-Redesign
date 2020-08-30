import React, { useState, useEffect } from "react";
import { getStories } from "../../services/stories";
import ActionCard from "../../components/action-card/ActionCard";
import EditStory from "../../components/edit-story/EditStory";
import "./stories.css";
import { Redirect } from "react-router-dom";
import { set } from "mongoose";

export default function Stories(props) {
  const [stories, setStories] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await getStories();
      setStories(response);
    };
    fetchStories();
  }, []);

  const handleClick = (buttonID) => {
    setEditForm(buttonID);
  };

  const updateBool = () => {
    setEdit(true);
    window.location.reload(true);
  };

  if (edit) {
    return <Redirect push to="/aboutus" />;
  }

  if (!editForm) {
    return stories.map((story, i) => {
      return (
        <>
          <ActionCard
            id={`story${i + 1}`}
            image={`${story.imgURL}`}
            action={story.name}
            detail={story.story}
          />
          <button
            className="edit-story-button"
            id={`button${i + 1}`}
            onClick={(e) => {
              e.preventDefault();
              handleClick(`button${i + 1}`);
            }}
          >
            Edit
          </button>
        </>
      );
    });
  } else if (editForm === "button1") {
    return (
      <>
        <div id="edit-left">
          <EditStory id={stories[0]._id} updateBool={updateBool} />
        </div>

        <div id="constant-right">
          <ActionCard
            id={stories[1]._id}
            image={`${stories[1].imgURL}`}
            action={stories[1].name}
            detail={stories[1].story}
          />
        </div>
      </>
    );
  } else if (editForm === "button2") {
    return (
      <>
        <div id="constant-left">
          <ActionCard
            id={stories[0]._id}
            image={`${stories[0].imgURL}`}
            action={stories[0].name}
            detail={stories[0].story}
          />
        </div>

        <div id="edit-right">
          <EditStory id={stories[1]._id} updateBool={updateBool} />
        </div>
      </>
    );
  }
}
