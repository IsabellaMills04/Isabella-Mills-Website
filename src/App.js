import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>


        <Navbar/>


        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>


        <Footer/>
       
      </Router>
    </div>
  );
}


export default App;



