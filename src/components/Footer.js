import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../styles/Footer.css'
import Logo from '../assets/logo.png'
import { Grid } from '@mui/material'

function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const location = useLocation();

  useEffect(() => {
    setStatus("");
    setFormData({ name: "", email: "", message: "" });
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("https://formspree.io/f/mreyedkj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setStatus(res.ok ? "success" : "error");
  };

  return (
    <div className="footer">
        <footer className="leftSide">
          <h1>Contact Me</h1>
          <>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              className="input"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="submit">
              <button onClick={handleSubmit} className="submit-btn">Send</button>
              {status === "error" && <p style={{ color: "var(--error", fontStyle: "italic" }}>Something went wrong. Try again.</p>}
              {status === "success" && <p style={{ color: "var(--white)"}}>Thanks! I'll get back to you soon.</p>}
            </div>
          </>
        </footer>

        <footer className="rightSide">
          <Grid container direction="column">
            
            {/* Row 1 - h1 spans full width */}
            <Grid item xs={12}>
              <h1>Links</h1>
            </Grid>

            {/* Row 2 - two columns side by side */}
            <Grid item container direction="row">
              <Grid item xs={6}>
                <div className="column">
                  <Link className="link" to="/Home">Home</Link>
                  <Link className="link" to="/About">About</Link>
                  <Link className="link" to="/Portfolio">Portfolio</Link>
                  <Link className="link" to="/Resume">Resume</Link>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="column">
                  <a className="link" href="https://www.linkedin.com/in/isabellamills04/" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a className="link" href="https://github.com/IsabellaMills04" target="_blank" rel="noreferrer">GitHub</a>
                  <img src={Logo}/>
                </div>
              </Grid>
            </Grid>

          </Grid>
        </footer>
    </div>
  )
}


export default Footer;