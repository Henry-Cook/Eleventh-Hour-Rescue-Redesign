import React from 'react';
// import ActionCard from '../action-card/ActionCard'
import { getStories } from '../../services/stories'

export default function Stories() {

  console.log(getStories())

  return (

    <ActionCard />
  )

}