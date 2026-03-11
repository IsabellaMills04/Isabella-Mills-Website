import React from 'react'
import portfolioData from "../../data/porfolioData";


const designProjects = portfolioData.filter(p => p.category === "design");

function PortfolioDesign() {

    
  return (
    <div>
        <p style={{height: "600px", width: "100%", alignContent: "center", textAlign: "center"}}>Design Portfolio Under Construction...</p>
    </div>
  )
}

export default PortfolioDesign
