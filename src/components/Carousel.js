import React, { useState } from 'react'
import '../styles/Carousel.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import projects from '../data/projects'


function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 3 : prev - 1));
    };

    const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 3 ? 0 : prev + 1));
    };
    
    return (
        <div>
            <h2>My Projects</h2>
            
            <div className="carousel">
                <button className="carousel-btn prev" onClick={handlePrev}>
                    <ArrowBackIosNewIcon fontSize="large"/>
                </button>

                <div className="carousel-track">
                    {projects.slice(currentIndex, currentIndex + 3).map((project) => (  
                        <div className="carousel-card" key={project.id}>
                            <img src={project.image} alt={project.title} className="carousel-img" />
                            {/* <div className="carousel-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div> */}
                        </div>
                    ))}
                </div>

                <button className="carousel-btn next" onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
            
        </div>

    )
}

export default Carousel
