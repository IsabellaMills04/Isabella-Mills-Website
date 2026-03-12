import React, {useState} from 'react'
import '../../styles/Portfolio.css'
import portfolioData from "../../data/porfolioData"
import {ImageList, ImageListItem} from "@mui/material"



function PortfolioWeb({ showHeader = true, standalone = true}) {
  const webProjects = portfolioData.filter(p => p.category === "web")
  const [zoomedImg, setZoomedImg] = useState(null)


  return (
    <div className={standalone ? "container" : ""}>
      {showHeader && <h1 className="fade-in">Web Development</h1>}
      {showHeader && <h2 className="fade-in-delay-1">Portfolio</h2>}
      <div className="portfolio">
        {webProjects.map((project, index) => (
          <div 
            className="project-row" 
            key={project.id} 
            id={`project-${project.id}`}
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div className={`project-images ${index === 0 ? "fade-in-delay-1" : ""}`}>
              <ImageList 
                variant="masonry" 
                cols={3} 
                gap={20} 
                style={{padding:"10px 10px 15px 10px"}} 
              >
                {project.images.map((img, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={img}
                      alt={`${project.title} ${index + 1}`}
                      loading={index === 0 ? "eager" : "lazy"}  
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
              <p>Click to Zoom</p>
            </div>

            <div className="project-info">
              <h3 className="fade-in-delay-2">{project.title}</h3>
              <div className="project-tools">
                {project.tools?.map((tool, index) => (
                  <h4 key={index} className="fade-in-delay-3">{tool}</h4>
                ))}
              </div>
              <p className="fade-in-delay-3">{project.description}</p>
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

export default PortfolioWeb
