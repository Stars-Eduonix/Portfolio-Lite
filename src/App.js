import React from "react"; 

import Navbar from "./Components/Navbar";
import Section from "./Components/Section";


let data = [
     {title: "About Me", description: "I am a student of B.Tech in Computer Science and Engineering at Indian Institute of Information Technology, Ranchi. I am a full stack web developer and a competitive programmer. I am a quick learner and a team player. I am always ready to learn new things and explore new technologies. I am a hardworking person and I always try to give my best in whatever I do I am a student of B.Tech in Computer Science and Engineering at Indian Institute of Information Technology, Ranchi. I am a full stack web developer and a competitive programmer. I am a quick learner and a team player. I am always ready to learn new things and explore new technologies. I am a hardworking person and I always try to give my best in whatever I do."},

        {title: "Education", description: "I am a student of B.Tech in Computer Science and Engineering at Indian Institute of Information Technology, Ranchi. I am a full stack web developer and a competitive programmer. I am a quick learner and a team player. I am always ready to learn new things and explore new technologies. I am a hardworking person and I always try to give my best in whatever I do I am a student of B.Tech in Computer Science and Engineering at Indian Institute of Information Technology, Ranchi. I am a full stack web developer and a competitive programmer. I am a quick learner and a team player. I am always ready to learn new things and explore new technologies. I am a hardworking person and I always try to give my best in whatever I do."},

        {title: "Skills", description: "I am a student of B.Tech in Computer Science and Engineering at Indian Institute of Information Technology, Ranchi. I am a full stack web developer and a competitive programmer. I am a quick learner and a team player. I am always ready to learn new things and explore new technologies. I am a hardworking person and I always try to give my best in whatever I do I am a student of B.Tech in Computer Science and Engineering at Indian Institute of Information Technology, Ranchi. I am a full stack web developer and a competitive programmer. I am a quick learner and a team player. I am always ready to learn new things and explore new technologies. I am a hardworking person and I always try to give my best in whatever I do."},

        {title: "Projects", description: "I am a student of B.Tech in Computer Science and Engineering at Indian Institute of Information Technology, Ranchi. I am a full stack web developer and a competitive programmer. I am a quick learner and a team player. I am always ready to learn new things and explore new technologies. I am a hardworking person and I always try to give my best in whatever I do I am a student of B.Tech in Computer Science and Engineering at Indian Institute of Information Technology, Ranchi. I am a full stack web developer and a competitive programmer. I am a quick learner and a team player. I am always ready to learn new things and explore new technologies. I am a hardworking person and I always try to give my best in whatever I do."},

]


const App = () => {


    return(
        <div>
            <Navbar /> 


            {

                data.map((value, key)=>(
                        <Section 
                             title={value.title}
                             des={value.description}
                        />
                ))



            }
            
        </div>
    )
}

export default App;