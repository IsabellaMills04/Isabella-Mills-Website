import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/Home.css'
import Isabella from '../assets/isabella.jpg'

const images = [
  { src: require('../assets/projects/image1.jpg'), caption: 'Project 1' },
  { src: require('../assets/projects/image2.jpg'), caption: 'Project 2' },
  { src: require('../assets/projects/image3.jpg'), caption: 'Project 3' },
  { src: require('../assets/projects/image4.jpg'), caption: 'Project 4' },
  { src: require('../assets/projects/image5.jpg'), caption: 'Project 5' },
];

function Home() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('right');

  const slide = (dir) => {
    if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(prev =>
          dir === 'right'
            ? (prev + 1) % images.length
            : (prev - 1 + images.length) % images.length
        );
        setAnimating(false);
      }, 300);
    };

  const visible = [0, 1, 2].map(offset => images[(current + offset) % images.length]);

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

      <section className="gallery">

        <button className="arrow" onClick={() => slide('left')}><ArrowBackIosNewIcon /></button>

        <div className={`gallery-track ${animating ? `slide-${direction}` : ''}`}>
          {visible.map((img, index) => (
            <div className="gallery-image" key={index}>
              <img src={img.src} alt={img.caption} />
              <p>{img.caption}</p>
            </div>
          ))}
        </div>

        <button className="arrow" onClick={() => slide('right')}><ArrowForwardIosIcon /></button>

      </section>
      
    </div>
  )
}


export default Home;