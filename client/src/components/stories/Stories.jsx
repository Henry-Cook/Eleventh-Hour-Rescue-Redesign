import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getStories, getStory, updateStory } from "../../services/stories";
import ActionCard from '../../components/action-card/ActionCard'
import './stories.css'

export default function Stories() {

  const [stories, updateStories] = useState([]);
  const [editForm, setEditForm] = useState(false)

  useEffect(() => {
    const fetchStories = async () => {
      const response = await getStories(); updateStories(response);
    };
    console.log(stories)
    fetchStories();
  }, []);

  const handleIt = (e) => {
    e.preventDefault()
    setEditForm(true)
  }
  
  return (

    
    stories.map((story, i) => {
    
      
        !editForm ? (
          <Link to={`/edit/${story._id}`}
            onClick={handleIt} >
            <ActionCard
              id={`story${i + 1}`}
              image={`${story.imgURL}`}
              action={story.name}
              detail={story.story} />
          </Link > )
         : <h1>h1</h1>)

      
    })
  
      
  )
}