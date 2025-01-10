import React from 'react'
import "./Project.css"
import { Button, Typography } from '@mui/material'
import { AiOutlineProject } from "react-icons/ai"
import { Delete } from '@mui/icons-material'
import Chatapp from "../../assets/Images/chatapp2.png"
import textSpark from "../../assets/Images/textSpark.png"
import Todo from "../../assets/Images/todo.png"
import Blog from "../../assets/Images/blog.png"
import IBI from "../../assets/Images/ibi.png"

const Project = () => {

    const ProjectsCard = ({
        url, projectImg, projectTitle, description, technologies, isAdmin = false,
    }) => {
        return (
            <>
                <a href={url} className="projectCard" target='black'>
                    <div>
                        <img src={projectImg} alt="projecct" />
                        <Typography variant='5'>{projectTitle}</Typography></div>
                    <div>
                        <Typography variant='h4'>About Project</Typography>
                        <Typography>{description}</Typography>
                        <Typography variant='h6'>Tech Stack :{technologies}</Typography>
                    </div>
                </a>
                {isAdmin && (
                    <Button><Delete /></Button>
                )}
            </>
        )
    }

    const projects = [
        {
            url: "https://blog-app-soni.vercel.app",
            projectImg: Blog,
            description: "A dynamic and interactive blog website where users can perform basic CRUD (Create, Read, Update, Delete) operations on post.",
            technologies: "Appwrite, Reduxjs/toolkit, React, TinyMCE, React-router-dom",
            title: ""
        },
        {
            url: "https://info-bharat-interns-vinayak100nis-projects.vercel.app",
            projectImg: IBI,
            description: "A dynamic and interactive blog website where users can perform basic CRUD (Create, Read, Update, Delete) operations on post.",
            technologies: "Appwrite, Reduxjs/toolkit, React, TinyMCE, React-router-dom",
            title: ""
        },
        {
            url: "https://moonlight-chatapp.vercel.app",
            projectImg: Chatapp,
            description: "Real-time chats, Create with React and Firebase, wrapped in a CSS design for simplicity. Connect easily, chat seamlessly.",
            technologies: "Vite , React ,Chakra-Ui , Firebase",
            title: "ChatApp"
        },
        {
            url: "https://todo-list-vinayak.vercel.app",
            projectImg: Todo,
            description: "Streamline your day with our minimalist to-do app. Add and track daily tasks effortlessly.",
            technologies: "Vite, React, Mui/material",
            title: ""
        },
        {
            url: "https://textspark.vercel.app/",
            projectImg: textSpark,
            description: "Easily format text, count words, and estimate reading time with textSpark. Simplify your tasks instantly.",
            technologies: "React",
            title: "textSpark"
        },];


    return (
        <div className="projects">
            <Typography variant='h3'>Projects <AiOutlineProject /></Typography>
            <div className="projectsWrapper">
                {
                    projects.map((project, index) => (
                        <ProjectsCard
                            url={project.url}
                            projectImg={project.projectImg} projectTitle={project.title}
                            description={project.description} technologies={project.technologies}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Project
