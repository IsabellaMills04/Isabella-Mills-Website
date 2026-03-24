import React from 'react'
import '../styles/Resume.css'
import ResumeImage from '../assets/resume.jpg'
import Button from '@mui/material/Button'
import DownloadIcon from '@mui/icons-material/Download'
import ResumeFile from '../assets/IsabellaMillsResume.pdf'


function Resume() {
  return (
    <div className="resume-container">
        <div className="header">
          <div>
            <h2>Download</h2>
            <h3>my Resume</h3>
          </div>

          <a href={ResumeFile} download="IsabellaMillsResume.pdf">
            <Button sx={{
              height: '80%',
              width: '80px',
              color: 'var(--green-dark)',
              border: '3px solid var(--green-dark)',
              fontFamily: 'var(--montserrat)',
              borderRadius: '30px',
              padding: '10px 30px',
              transition: 'all ease 0.2s',
              '&:hover': {
                backgroundColor: 'var(--green-dark)',
                color: 'var(--white)',
                transform: 'scale(1.05)',
              }
            }}>
              <DownloadIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' }}}/>
            </Button>
          </a>
        </div>
        <img src={ResumeImage}/>
    </div>
  )
}

export default Resume
