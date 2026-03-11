import React, {useState} from 'react'
import '../../styles/Portfolio.css'
import portfolioData from "../../data/porfolioData"
import {ImageList, ImageListItem} from "@mui/material"



function PortfolioDesign({ showHeader = true, standalone = true}) {
  const designProjects = portfolioData.filter(p => p.category === "design")
  const [zoomedImg, setZoomedImg] = useState(null)
    
  return (
    <div className={standalone ? "container" : ""}>
      {showHeader && <h1>Media Design</h1>}
      {showHeader && <h2>Portfolio</h2>}
      <div className="portfolio">
        {designProjects.map((project, index) => (
          <div className="project-row" key={project.id} style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}>
            <div className="project-images">
              {project.images.length === 1 ? (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  loading={index === 0 ? "eager" : "lazy"}  
                  onClick={() => setZoomedImg(project.images[0])}
                  style={{
                    cursor: "zoom-in",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px var(--black-shadow)",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <ImageList variant="masonry" cols={project.images.length === 2 ? 2 : 3} gap={20} style={{padding:"10px 10px 15px 10px"}}>
                  {project.images.map((img, index) => (
                    <ImageListItem key={index}>
                      <img
                        src={img}
                        alt={`${project.title} ${index + 1}`}
                        loading="lazy"
                        onClick={() => setZoomedImg(img)}
                        style={{ 
                          cursor: "zoom-in", 
                          borderRadius: "10px", 
                          boxShadow: "0 4px 10px var(--black-shadow)",
                        }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              )}
              <p>Click to Zoom</p>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="project-tools">
                {project.tools?.map((tool, index) => (
                  <h4 key={index}>{tool}</h4>
                ))}
              </div>
              <p>{project.description}</p>
            </div>

          </div>
        ))}
        {zoomedImg && (
          <div className="zoom-overlay" onClick={() => setZoomedImg(null)}>
            <img src={zoomedImg} alt="zoomed" className="zoom-image" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PortfolioDesign
