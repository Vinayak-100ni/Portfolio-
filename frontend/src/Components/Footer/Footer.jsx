import React from 'react'
import "./footer.css"
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {BsInstagram,BsLinkedin,BsCodeSlash} from "react-icons/bs"

const Footer = () => {
  return (
    <div className="Footer">
        <div>
        <Typography variant='h5'>About Me</Typography>
        <Typography>
            Hey, my name is Vinayak Soni. I am a student pursuing B.Tech (CS) and a newly minted FullStack developer.
        </Typography>
        <Link to='/contact' className='footerContactBtn'>
            <Typography>Contact Us</Typography>
        </Link>
        </div>
        <div>
        <Typography variant='h6'>Social Media</Typography>
        <a href="https://www.instagram.com/vinayak__100ni/" target='black'><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/vinayak-100ni" target='black'><BsLinkedin/></a>
        <a href="https://auth.geeksforgeeks.org/user/vinayaksoryj1/practice/" target='black'><BsCodeSlash/></a>
        </div>
    </div>
  )
}

export default Footer
