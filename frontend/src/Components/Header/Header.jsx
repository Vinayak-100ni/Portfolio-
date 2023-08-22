import React from 'react'
import {ReactNavbar} from 'overlay-navbar'
import {logo} from '../../assets/Images/logo.png'
import {FaUserAlt} from "react-icons/fa"
const Header = () => {

  return (
    <>
    <ReactNavbar 
    navColor1="White"
    navColor2="hsl(290,48%,8%)"
    burgerColor="hsl(250,100%,75%)"
    burgerColorHovet="hsl(250,100%,75%)"
    logo={logo}
    logoWidth="150px"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    link1Text="Home"
    link2Text="About"
    link3Text="Projects"
    link4Text="Contect"
    link1Url="/"
    link2Url="about"
    link3Url="projects"
    link4Url="contact"
    link1ColorHover="White"
    link1Color="HSL(250,100%,75%)"
    link1Size="1.5rem"
    link1Padding="3vmax"
    profileIcon={true}
    ProfileIconElement={FaUserAlt}
    profileIconColor="hsl(250,100%,75%)"
    profileIconColorHover="white"
    />

    </>
  )
}

export default Header
