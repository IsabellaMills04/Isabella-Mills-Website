import React from 'react'
import '../../styles/Portfolio.css'
import PortfolioWeb from '../portfolio/PortfolioWeb'
import PortfolioDesign from '../portfolio/PortfolioDesign'
import PortfolioOther from '../portfolio/PortfolioOther'



function PorfolioAll() {
  return (
    <div className="container">
      <h1>All Work</h1>
      <h2>Portfolio</h2>
      <PortfolioWeb showHeader={false} standalone = {false}/>
      <PortfolioDesign showHeader={false} standalone = {false}/>
      <PortfolioOther showHeader={false} standalone = {false}/>
    </div>
  )
}

export default PorfolioAll
