import React from 'react'
import portfolioData from "../../data/porfolioData";

const otherProjects = portfolioData.filter(p => p.category === "other");


function PortfolioOther() {
  return (
    <div>
        <p style={{height: "600px", width: "100%", alignContent: "center", textAlign: "center"}}>Other Portfolio Under Construction...</p>
    </div>
  )
}

export default PortfolioOther
