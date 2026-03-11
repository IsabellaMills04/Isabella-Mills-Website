import React, {useState} from 'react'
import '../../styles/Portfolio.css'
import portfolioData from "../../data/porfolioData"
import {ImageList, ImageListItem} from "@mui/material"

function PortfolioWeb() {
  const webProjects = portfolioData.filter(p => p.category === "web")
  const [zoomedImg, setZoomedImg] = useState(null)


  return (
    <div className="container">
      <h1>Web Development</h1>
      <h2>Portfolio</h2>
      <div className="portfolio-web">
        {webProjects.map((project, index) => (
          <div className="project-row" key={project.id} style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}>
            <div className="project-images">
              <ImageList variant="masonry" cols={3} gap={20} style={{padding:"10px 10px 15px 10px"}} >
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
              {/* <div className="project-tools">
                {project.tools?.map((tool, index) => (
                  <h4 key={index}>{tool}</h4>
                ))}
              </div> */}
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
