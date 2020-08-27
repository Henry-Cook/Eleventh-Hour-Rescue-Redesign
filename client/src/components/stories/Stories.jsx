import React, { useState, useEffect } from "react";
import { getStories } from "../../services/stories";
import ActionCard from '../../components/action-card/ActionCard'
import './stories.css'

export default function Stories() {

  const [stories, updateStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await getStories();
      updateStories(response);
    };
    console.log(stories)
    fetchStories();
  }, []);

  return (

    
      stories.map((story, i) => {
        return (
          <ActionCard
            id={'story'}
            image={`${story.imgURL}`}
            action={story.name}
            detail={story.story} />
        )
      })

    
  )
}