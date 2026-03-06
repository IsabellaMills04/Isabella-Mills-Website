import React from 'react'
import '../styles/Resume.css'
import ResumeImage from '../assets/resume.jpg'
import Button from '@mui/material/Button'


function Resume() {
  return (
    <div className="resume-container">
        <div className="header">
            <h2>My Resume</h2>
            <Button>Download</Button>
        </div>
        <img src={ResumeImage}/>
    </div>
  )
}

export default Resume
