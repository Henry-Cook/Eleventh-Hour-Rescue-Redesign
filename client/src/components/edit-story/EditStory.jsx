import React, { useState } from "react";
import {updateStory} from '../../services/stories.js'

import "./edit-story.css";

export default function EditStory(props) {

  const [story, setStory] = useState({
    imgURL: props.image,
    name: props.action,
    story: props.detail
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setStory({
            ...story,
            [name]: value
    })
  }

  
  const handleSubmit = async (id) => {
    await updateStory(id, story)
}
  

  return (
    <div className="edit-story">

      <img src={story.imgURL} />

      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(story._id)
      }}>

        <input
          value={story.imgURL}
          name='imgURL'
          onChange={handleChange}
        />

        <input
          value={story.name}
          name='name'
          onChange={handleChange}
        />
        
        <input
          value={story.story}
          name='story'
          onChange={handleChange}
        />
        
        <button type="sumbmit">Save</button>
      </form>
      

    </div>
  );
}
