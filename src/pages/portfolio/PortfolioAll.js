import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../../styles/Portfolio.css'
import PortfolioWeb from '../portfolio/PortfolioWeb'
import PortfolioDesign from '../portfolio/PortfolioDesign'
import PortfolioOther from '../portfolio/PortfolioOther'



function PorfolioAll() {
  const location = useLocation()

  useEffect(() => {
  const params = new URLSearchParams(location.search)
  const scrollTo = params.get('scrollTo')
  
  if (scrollTo) {
    setTimeout(() => {
      const el = document.getElementById(scrollTo)
      if (el) {
        const navbarHeight = 80  // adjust this to match your navbar's height
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 60
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 100)
  }
}, [location.search])

  return (
    <div className="container">
      <h1 className="fade-in">All Work</h1>
      <h2 className="fade-in-delay-1">Portfolio</h2>
      <PortfolioWeb 
        showHeader={false} 
        standalone = {false}
      />
      <PortfolioDesign 
        showHeader={false} 
        standalone = {false}
      />
      <PortfolioOther 
        showHeader={false} 
        standalone = {false}
      />
    </div>
  )
}

export default PorfolioAll
