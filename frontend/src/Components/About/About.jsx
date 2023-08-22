import React from 'react'
import "./About.css"
import { Typography } from '@mui/material'
import Img from "../../assets/Images/logo1.png"
const About = () => {
  return (
    <div className="about">
        <div className="aboutContainer1"><Typography>"Coding is the closest thing we have to a superpower."</Typography></div>
        <div className="aboutContainer2">
            <div>
                <img src={Img} alt="" className='aboutAvatar'/>
                <Typography variant='h4'>Vinayak Soni</Typography>
                <Typography>(Computer Science Student)</Typography>
            </div>
            <div><Typography 
            style={{wordSpacing:"3px",
                    lineHeight:"37px",
                    textAlign:"right",
                    letterSpacing:"3px"}}>
              A passionate B.Tech CS student on a journey of continuous growth and innovation. My focus lies in the dynamic world of web development, where I'm honing my skills to create engaging and user-centric digital experiences. Join me as I combine creativity and technology to shape the future of the web.</Typography></div>
        </div>
    </div>
  )
}

export default About
