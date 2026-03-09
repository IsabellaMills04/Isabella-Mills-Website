import React from 'react'
import '../styles/Home.css'
import Isabella from '../assets/isabella.jpg'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className="home">

      <section className="hero">
        <div className="leftSide">
          <h1>
            Welcome
          </h1>
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

        </div>
        <div className="rightSide">
          
        </div>
      </section>
      
    </div>
  )
}


export default Home;