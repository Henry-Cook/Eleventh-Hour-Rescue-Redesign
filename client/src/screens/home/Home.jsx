import React from 'react'
import Layout from '../../components/layout/Layout.jsx'
import './home.css'

import homedogs from '../../assets/images/homedogs.png'

export default function Home() {
  return (
    
    <Layout>
    <div className="home">
      <img src={homedogs}
        alt="dogs"
        id="homedogs" />
      <div className="welcome-message">
        <h1>Welcome</h1>
        <p>Eleventh Hour Rescue is a New Jersey based animal shelter which prides itself on two things: being a no kill rescue center, and our amazing volunteers. We are only able to maintain our dream of saving lives through kind donations.</p>
      </div>
      
      <div className="circles-container">
        
      </div>
</div>
</Layout>    
 
  )
}

