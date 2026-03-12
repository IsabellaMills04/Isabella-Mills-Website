import React, { useState } from 'react'
import '../styles/Carousel.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import projects from '../data/carouselData'
import { useNavigate } from 'react-router-dom'


function Carousel() {
    const VISIBLE = 3;
    const [currentIndex, setCurrentIndex] = useState(VISIBLE);
    const [animating, setAnimating] = useState(false);
    const navigate = useNavigate();

    const cloned = [
        ...projects.slice(-VISIBLE),
        ...projects,
        ...projects.slice(0, VISIBLE)
    ];

    const handleCardClick = (project) => { 
        navigate(`/portfolio?scrollTo=project-${project.portfolioId}`)
    }

    const handlePrev = () => {
        if (animating) return;
        setAnimating(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        if (animating) return;
        setAnimating(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const handleTransitionEnd = () => {
        setAnimating(false);
        if (currentIndex === 0) {
            setCurrentIndex(projects.length);
        } else if (currentIndex === cloned.length - VISIBLE) {
            setCurrentIndex(VISIBLE);
        }
    };

    return (
        <div className="carousel">
            <button className="carousel-btn prev" onClick={handlePrev}>
                <ArrowBackIosNewIcon fontSize="large"/>
            </button>

            <div className="carousel-window">
                <div
                    className="carousel-track"
                    style={{
                        transform: `translateX(calc(-${currentIndex} * (var(--card-width) + var(--card-gap))))`,
                        transition: animating ? 'transform 0.4s ease' : 'none'
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {cloned.map((project, i) => (
                        <div 
                            className="carousel-card" 
                            key={i}
                            onClick={() => handleCardClick(project)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={project.image} alt={project.title} className="carousel-img" />
                            <div className="carousel-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="carousel-btn next" onClick={handleNext}>
                <ArrowForwardIosIcon fontSize="large"/>
            </button>
        </div>
    );
}


export default Carousel