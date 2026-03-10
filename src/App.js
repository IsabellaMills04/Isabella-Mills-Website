import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'


function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>

        <ScrollToTop />

        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>

        <Footer/>
       
      </Router>
    </div>
  );
}


export default App;



