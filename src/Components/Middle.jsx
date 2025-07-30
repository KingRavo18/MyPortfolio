import React, { useState } from "react"
import Projects from './Projects/Projects.jsx'
import Experience from './ExperienceEducation/Experience.jsx'
import DisciplinatorsScreenshot from '../assets/Disciplinators_screenshot.png'
import SEO_Screenshot from '../assets/SEO_screenshot.png'
import SandboxScreenshot from '../assets/Sandbox_screenshot.png'
import Magic8BallScreenshot from '../assets/Magic_8-Ball_Screenshot.png'
import AuthorsFace from '../assets/Authors_Face.png'
import { useLanguage } from '../App.jsx'

export default function Middle(){

    const { language } = useLanguage();
    const { 
            bigIntro1,
            bigIntro2,
            bigIntro3,
            imageAlt,
            educationTitle,
            educationExplanation1,
            experienceTitle,
            experienceExplanation1,
            projectsTitle,
            project1Explanation,
            project1Alt,
            buttonName,
            project2Explanation,
            project2Alt,
            project3Explanation,
            project3Alt,
            project4Explanation,
            project4Alt
          } = language.middle;


    const [openPopupId, setOpenPopupId] = useState(null);

    //this toggles the experiances and education popups open and closed
    const togglePopup = (id) => {
        setOpenPopupId(prevOpenPopupId => (prevOpenPopupId === id ? null : id));
    }

    //the array which contains data for the experiance popups
    const experiancePopup = [
        {id: "Education_Popup", title: educationTitle, desc1: educationExplanation1},
        {id: "Experience_Popup", title: experienceTitle, desc1: experienceExplanation1},
    ]

    //the array which contains data for my projects
    const projectsData = [
        {
         title: "Sandbox", 
         desc: project1Explanation, 
         image: SandboxScreenshot, 
         alt: project1Alt, 
         location: "https://smuka-lapa.vercel.app/", 
         button: buttonName
        },
        {
         title: "Disciplinators", 
         desc: project2Explanation, 
         image: DisciplinatorsScreenshot, 
         alt: project2Alt, 
         location: "https://disciplinators.kesug.com/", 
         button: buttonName
        },
        {
         title: "SEO", 
         desc: project3Explanation, 
         image: SEO_Screenshot, 
         alt: project3Alt, 
         location: "https://seo-vtdt-project.vercel.app/", 
         button: buttonName
        },
        {
         title: "Magic 8-Ball", 
         desc: project4Explanation, 
         image: Magic8BallScreenshot, 
         alt: project4Alt, 
         location: "https://magic-8-ball-seven.vercel.app/", 
         button: buttonName
        },
    ]

    return(
        //The id is there to serve as a hook for the navigation bar
        <main id="introduction"> 
            {/* The section where my introduction and face are */}
            <div className="introSection">
                {/* The page where the image of my face goes */}
                <div className="veryBig">
                    <img className="faceImage" src={AuthorsFace} alt={imageAlt || "Image of Raivo Kingovskis"} />
                </div>

                <span className="binder-ring left-[47.2vw] top-[10vw]"/>

                {/* The page where my introduction will be written */}
                <div className="backgroundTextArea">
                    <div className="introduction-title">
                        <span className="small-bubble"/>
                        <h1>Raivo Kingovskis</h1>
                        <span className="small-bubble"/>
                    </div>
                    <p>
                        {bigIntro1}
                        <br/>
                        {bigIntro2}
                        <br/>
                        {bigIntro3}
                    </p>
                </div>
            </div>

            {/* The section where my experience and education are described */}
            <div className="p-[1.8vw] flex-col flex items-center h-auto">
                {experiancePopup.map(({ id, title, desc1 }) => (
                    <Experience 
                            key={id}
                            func={() => togglePopup(id)} 
                            ID={id} 
                            title={title} 
                            desc1={desc1}
                            isOpen={openPopupId === id}
                    />
                ))}
            </div>

            {/* My Projects */}
            <div id="projects">
                <span className="small-bubble"/>
                <h1>{projectsTitle}</h1>
                <span className="small-bubble"/>
            </div>

            <div className="projectSection">
                {projectsData.map(({ title, desc, image, alt, location, button }) => (
                <Projects 
                        key={title}
                        title={title} 
                        explanation={desc} 
                        image={image} 
                        alt={alt} 
                        location={location} 
                        buttonName={button}
                />
                ))}
            </div>
            
        </main>
    );
}