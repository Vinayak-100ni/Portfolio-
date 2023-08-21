import React, { useEffect } from 'react'
import './Home.css'
import * as THREE from "three";
import moonImage from '../../assets/Images/moon.png'
import moon2Image from '../../assets/Images/moon2.jpg'
import { Typography } from '@mui/material'
import TimeLine from '../TimeLine/TimeLine';
import {
  SiCplusplus, SiCss3, SiHtml5,
  SiReact, SiJavascript, SiMongodb, SiNodedotjs, SiExpress
} from "react-icons/si";
import "../Contact/contact.css"
import Login from '../Login/Login';

const Home = () => {

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const moon2Texture = textureLoader.load(moon2Image);



    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2.7, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });

    const moon2Geometry = new THREE.SphereGeometry(3, 60, 60);
    const moon2Material = new THREE.MeshBasicMaterial({ map: moon2Texture });


    const pointLight = new THREE.PointLight(0xffffff, 100);
    pointLight.position.z = 10;

    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    const moon2 = new THREE.Mesh(moon2Geometry, moon2Material);

    scene.add(moon);
    scene.add(moon2);
    scene.add(pointLight);


    moon2.position.set(10, 5, 5);
    camera.position.set(4, 2, 10);

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.01;
      moon2.rotation.y += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    }
    animate();

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        moon2.rotation.x -= constSpeed;
        moon2.rotation.y += constSpeed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        moon2.rotation.x -= constSpeed;
        moon2.rotation.y -= constSpeed;
      }
      if (e.clientY > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        moon2.rotation.x -= constSpeed;
        moon2.rotation.y += constSpeed;
      }
      if (e.clientY <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        moon2.rotation.x -= constSpeed;
        moon2.rotation.y -= constSpeed;
      }
    })

  }, [])

  return (
    <div className="home">

      <canvas className="homeCanvas"></canvas>

      <div className='homelogin'>
        <Login /></div>

      <div className="homeContainer">
        <Typography variant='h3'>TimeLine</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>

      <div className="homeSkills">
        <Typography variant='h3'>SKILLS</Typography>

        <div className="homeCubeSkills">

          <div className="homeCubeSKillsFaces homeCubeSKillsFace1">
            <img src="https://pluralsight.imgix.net/paths/path-icons/c-plus-plus-93c7ddd5cc.png" alt="face1" />
          </div>
          <div className="homeCubeSKillsFaces homeCubeSKillsFace4">
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" alt="face4" />
          </div>
          <div className="homeCubeSKillsFaces homeCubeSKillsFace3">
            <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="face3" />
          </div>
          <div className="homeCubeSKillsFaces homeCubeSKillsFace2">
          <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="face5" />
          </div>
          <div className="homeCubeSKillsFaces homeCubeSKillsFace5">
            <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="face5" />
          </div>
          <div className="homeCubeSKillsFaces homeCubeSKillsFace6">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-4-1175139.png" alt="face6" />
          </div>
        </div>
        <div className="cubeShadow"></div>

        <div className="homeSkillsBox">
          <SiCplusplus />
          <SiCss3 /><SiHtml5 />
          <SiReact /><SiJavascript /><SiMongodb /><SiNodedotjs /><SiExpress />
        </div>
      </div>
    </div>
  )
}

export default Home
