import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import Logotype from '../assets/logotype.png'
import {Menu, MenuItem, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <div className="navbar">
        <header className="nav-left">
          <Link to="/" className="logo">
            <img src={Logotype}/>
          </Link>
        </header>

        {/* Laptop-Desktop Navbar */}
        <nav className="nav-right">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            <Button
              onClick={handleOpen}
              disableRipple
              sx={{
                lineHeight: "normal",
                verticalAlign: "baseline",
                color: "var(--black)",
                textTransform: "none",
                fontFamily: "var(--montserrat)",
                fontWeight: 600,
                fontSize: "18px",
                padding: 0,
                margin: "20px",
                transition: "all ease 0.5s",
                "&:hover": {
                  backgroundColor: "transparent",
                  transform: "scale(1.1)",
                }

              }}
            >
              Portfolio
            </Button>
            <Menu 
              anchorEl={anchorEl} 
              open={open} 
              onClose={handleClose}
              slotProps={{
                paper: {
                  sx: {
                    
                    "& .MuiMenuItem-root": {
                      fontFamily: "var(--montserrat)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--green-dark)",
                      transition: "all ease 0.5s",
                      margin: "2px",
                      // whiteSpace: "normal",
                    },
                    "& .MuiMenuItem-root:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: "transparent",
                    },
                  },
                },
              }}
            >
              <MenuItem 
                onClick={handleClose} 
                component={Link} 
                to="/portfolio"
              >
                All Work
              </MenuItem>
              <MenuItem 
                onClick={handleClose} 
                component={Link} 
                to="/portfolio/web"
              >
                Web Development
              </MenuItem>
              <MenuItem 
                onClick={handleClose} 
                component={Link} 
                to="/portfolio/design"
              >
                Media Design
              </MenuItem>
              <MenuItem 
                onClick={handleClose} 
                component={Link} 
                to="/portfolio/other"
              >
                Other
              </MenuItem>
            </Menu>
            <Link to="/resume">Resume</Link>
        </nav>

    </div>
  )
}


export default Navbar;