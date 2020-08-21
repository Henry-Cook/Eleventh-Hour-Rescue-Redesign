import React, { useState, useEffect } from "react";
import Layout from '../../components/layout/Layout.jsx'
import { getStories } from "../../controllers/storyController"

//Will probably need to pass props for the locations later?
export default function AboutUs(props) {
  const [stories, updateStories] = useState([]);

  // useEffect(() => {
  //   const fetchStories = async () => {
  //     const response = await getStories();
  //     updateStories(response)
  //   };
  //   fetchStories();
  // }, [])

  return (
    <>
      <Layout>
      <div className="about">
        <h1>About Us</h1>
      </div>
      <div className="mission">
        <h4>MISSION</h4>
        <p>
          Eleventh Hour Rescue is a fully registered 501C(3), nonprofit, 100%
          no-kill, volunteer based organization dedicated to saving the lives of
          innocent dogs and cats on death row. Many of them are rescued at their
          Eleventh Hour--when they are scheduled to be put to death by other
          shelters that can no longer care for them. We give our dogs and cats
          all the medical attention they require, a place to live, and through
          our extensive adoption services, a second chance at a happy and
          fulfilled life. We rely solely on the generosity of our volunteers,
          the community and animal lovers everywhere.
        </p>
      </div>
      <div className="impact">
        <h4>IMPACT</h4>
        {/* Something here for call to action circles?  */}
      </div>
      <div className="stories">
        <h4>ADOPTION STORIES</h4>
        {stories.map((story) => {
          return (
            <>
              <img src='{story.imgURL}' alt='Israel' />
              <h5>{story.name}</h5>
              <p>{story.story}</p>
              </>
          )
          
        })}
        </div>
        </Layout>
    </>
  );
}
