import React from 'react'
import '../styles/About.css'
import Isabella from '../assets/isabella2.jpg'

function About() {
  return (

    <div className="about-container">
      <p style={{textAlign: "center"}}>*STILL UNDER DEVELOPMENT*</p>


      <section className="about-hero">
        <div className="leftSide">
            <img src={Isabella}/>
        </div>
        <div className="rightSide">
          <h1>Hi, I'm Isabella!</h1>
          <h2>the developer behind the screen</h2>
          <p>I'm a Digital Media: Computer Science student at 
            Northwest Missouri State University passionate about 
            creating clean, user-focused web apps. I love working 
            at the intersection of design and development to build 
            things that are both functional and beautiful!</p>
        </div>
      </section>

      <section className="life-section">
        <div className="life-photos">
          <div className="photo-box life-box" />
        </div>
        <div className="life-section__text">
          <h1>Beyond the screen.</h1>
          <h2>leadership &amp; community.</h2>
          <p>
            Outside of coding, I'm a natural organizer and leader. As Banner
            Chair for Sigma Kappa, I coordinate large-scale creative projects
            and lead collaborative teams. I enjoy bringing structure and energy
            to group efforts — whether that's a homecoming banner or a group
            project deadline.
          </p>
          <a className="link-btn" href="#resume">View my resume →</a>
        </div>
      </section>

      <section className="fun-section">
        <div className="fun-section__left">
          <h2>when I'm not coding...</h2>
          <ul className="fun-list">
            <li><span className="fun-dot" />Designing something in Illustrator or Figma</li>
            <li><span className="fun-dot" />Working on my Godot game dev projects</li>
            <li><span className="fun-dot" />Finding new fonts to be obsessed with</li>
            <li><span className="fun-dot" />Probably rewatching comfort TV</li>
          </ul>
        </div>
        <div className="fun-photos">
          <div className="photo-box fun-box" />
          <div className="photo-box fun-box alt2" />
        </div>
      </section>

      <p style={{textAlign: "center"}}>*STILL UNDER DEVELOPMENT*</p>
      
    </div>
  )
}

export default About
