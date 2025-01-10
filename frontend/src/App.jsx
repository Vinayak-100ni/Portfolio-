import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About.jsx'
import Project from './Components/Project/Project.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Login from './Components/Login/Login'
import { useDispatch } from 'react-redux'
import { getUser } from './actions/user'
import { Typography } from '@mui/material'
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return <>
    <Header />
    <Typography variant="h5" style={{ transform: `translate(0vw ,97vh)`, color: "white", marginTop: '-40px', overflowX: "hidden" }}></Typography>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Project />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/account' element={<Login />} />
    </Routes>
    <Footer />
  </>
}

export default App
