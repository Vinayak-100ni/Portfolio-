import React from 'react'
import "./Project.css"
import { Button, Typography } from '@mui/material'
import { AiOutlineProject } from "react-icons/ai"
import { Delete } from '@mui/icons-material'
import Chatapp from "../../assets/Images/chatapp2.png"
import textSpark from "../../assets/Images/textSpark.png"
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
            url: "https://todo-list-vinayak.vercel.app",
            projectImg: "https://media.licdn.com/dms/image/D5622AQHumfqz36ZyBg/feedshare-shrink_800/0/1686131661773?e=1695254400&v=beta&t=F2VbaAIQ971ID2Q7qjjfxQNTQx8M5ccrrHfSxLhuLg8",
            description: "Streamline your day with our minimalist to-do app. Add and track daily tasks effortlessly.",
            technologies: "Vite, React, Mui/material",
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
            url: "https://textspark.vercel.app/",
            projectImg:textSpark,
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
