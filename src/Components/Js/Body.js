import React from 'react'
import Intro from './Intro'
import College from './College'
import Certificate from './Certificate'
import Aboutme from './Aboutme'
import Personal from './Personal'
import Contactme from './Contactme'
import { useState } from 'react'

// Images
// Certificates
import certificate1 from "../Images/certificates/work1.png"
import certificate2 from "../Images/certificates/work2.png"
import certificate3 from "../Images/certificates/work3.png"
import certificate4 from "../Images/certificates/work4.png"

// Personal Projects
import project1 from "../Images/personal/ps1.png"
import project2 from "../Images/personal/ps2.png"
import project3 from "../Images/personal/ps3.jpg"
import project5 from "../Images/personal/ps5.png"
import project6 from "../Images/personal/ps6.png"
import project7 from "../Images/personal/ps7.png"

const Body = () => {
    const [certificates] = useState([
        {
            id: 1,
            img: certificate1,
        },
        {
            id: 2,
            img: certificate2,
        },
        {
            id: 3,
            img: certificate3,
        },
        {
            id: 4,
            img: certificate4,
        },
    ])

const [personalProjects] = useState([
    {
        heading: 'Social Media PHP',
        img: project6,
        link: "https://github.com/ChittojiMuraliSreeKrishna/Php/tree/main/Socialmedia",
    },
    {
        heading: 'Todo List PHP',
        img: project7,
        link: "https://github.com/ChittojiMuraliSreeKrishna/Php/tree/main/TodoList",
    },
    {
        heading: 'Facerecog Opencv2',
        img: project3,
        link: "https://github.com/ChittojiMuraliSreeKrishna/Python_codes/tree/master/Opencv",
    },
    {
        heading: 'Ecommerce Site Django',
        img: project2,
        link: "https://github.com/ChittojiMuraliSreeKrishna/Django_Ecommerce",
    },
    {
        heading: 'Todolist Vanilla-js',
        img: project5,
        link: "https://github.com/ChittojiMuraliSreeKrishna/TodoList",
    },
    {
        heading: 'Arch Linux installation',
        img: project1,
        link: "https://github.com/ChittojiMuraliSreeKrishna/Arch-Linux-Installation",
    }
])

    return (
        <div className="container">
            <Intro />
            <College />
            <Certificate 
            certificates={certificates}
            />
            <Aboutme />
            <Personal 
            projects={personalProjects} 
            />
            <Contactme />
        </div>
    )
}

export default Body
