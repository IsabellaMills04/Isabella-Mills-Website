import React from 'react'
import '../styles/Home.css'
import Isabella from '../assets/isabella.jpg'
import AboutCollage from '../assets/about.png'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className="home">

      <section className="hero">
        <div className="leftSide">
          <h1>Welcome</h1>
          <h2>to my portfolio!</h2>
          <p>I’m a Digital Media: Computer Science student passionate
            about creating modern, user-friendly web apps. Check out
            my work and the projects I’ve built along the way!</p>
        </div>
        <div className="rightSide">
            <img src={Isabella}/>
        </div>
      </section>

      <section className="project-carousel-container">
        <div className="project-carousel">
          <h2>My Projects</h2>
          <Carousel/>
          <Link className="link" to="/portfolio">See More</Link>
        </div>
      </section>

      <section className="about-container">
        <div className="leftSide">
          <img src={AboutCollage}/>
        </div>
        <div className="rightSide">
          <h1>A Glimse</h1>
          <h2>into the aspiring developer.</h2>
          <p>I’m a Computer Science and Digital Media student passionate 
            about building clean, user-focused web applications. I enjoy 
            combining development and design to create projects that are 
            both functional and visually engaging.</p>
          <Link className="link" to="/about">Learn More</Link>
        </div>
      </section>
      
    </div>
  )
}


export default Home;