import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from '../App.jsx';
import Projects from './Projects/Projects.jsx';
import Experience from './Experience/Experience.jsx';
import DisciplinatorsScreenshot from '../assets/Disciplinators_screenshot.png';
import SEO_Screenshot from '../assets/SEO_screenshot.png';
import SandboxScreenshot from '../assets/Sandbox_screenshot.png';
import Magic8BallScreenshot from '../assets/Magic_8-Ball_Screenshot.png';
import AuthorsFace from '../assets/Authors_Face.jpg';
import SmallReactProjectsScreenshot from '../assets/SmallReactProjects_screenshot.png';

export default function Middle(){

    const { language } = useLanguage();
    const { 
            bigIntro1,
            bigIntro2,
            bigIntro3,
            imageAlt,
            educationExplanation,
            experienceTitle,
            experienceExplanation1,
            experienceExplanation2,
            experienceExplanation3,
            experienceExplanation4,
            experienceExplanation5,
            projectsTitle,
            project1Explanation,
            project1Alt,
            buttonName,
            button2Name,
            project2Explanation,
            project2Alt,
            project3Explanation,
            project3Alt,
            project4Explanation,
            project4Alt,
            project5Explanation,
            project5Alt
          } = language.middle;

    //this toggles the experiances popup open and closed
    const [openPopupId, setOpenPopupId] = useState(null);
    const togglePopup = (id) => setOpenPopupId(prevOpenPopupId => (prevOpenPopupId === id ? null : id));

    const projectsData = [
        {
         title: "Sandbox", 
         desc: project1Explanation, 
         image: SandboxScreenshot, 
         alt: project1Alt, 
         location: "https://smuka-lapa.vercel.app/", 
         location2: "https://github.com/KrievinsT/smuka_lapa", 
         button: buttonName,
         button2: button2Name
        },
        {
         title: "Disciplinators", 
         desc: project2Explanation, 
         image: DisciplinatorsScreenshot, 
         alt: project2Alt, 
         location: "https://disciplinators.kesug.com/", 
         location2: "https://github.com/KingRavo18/Disciplinator-Saraksts", 
         button: buttonName,
         button2: button2Name
        },
        {
         title: "SEO", 
         desc: project3Explanation, 
         image: SEO_Screenshot, 
         alt: project3Alt, 
         location: "https://seo-vtdt-project.vercel.app/", 
         location2: "https://github.com/KrievinsT/SEO", 
         button: buttonName,
         button2: button2Name
        },
        {
         title: "Small React Projects", 
         desc: project5Explanation, 
         image: SmallReactProjectsScreenshot, 
         alt: project5Alt, 
         location: "https://small-react-projects-eight.vercel.app/", 
         location2: "https://github.com/KingRavo18/SmallReactProjects", 
         button: buttonName,
         button2: button2Name
        },
        {
         title: "Magic 8-Ball", 
         desc: project4Explanation, 
         image: Magic8BallScreenshot, 
         alt: project4Alt, 
         location: "https://magic-8-ball-seven.vercel.app/", 
         location2: "https://github.com/KingRavo18/Magic-8-ball", 
         button: buttonName,
         button2: button2Name
        },
    ]

    const { ref: projectTitle, inView: projectTitleIsVisible } = useInView({
        triggerOnce: true, 
        threshold: 0.1   
    });
    const { ref: education, inView: educationIsVisible } = useInView({
        triggerOnce: true, 
        threshold: 0.1   
    });

    const educationExplanationGrow = (event) => {
        event.target.style.paddingInline = "7vw";
        event.target.style.fontSize = "3vw";
    }

    const educationExplanationShrink = (event) => {
        event.target.style.paddingInline = "35vw";
        event.target.style.fontSize = "1vw";
    }

    return(
        //The id is there to serve as a hook for the navigation bar
        <main id="introduction" className="pt-[4vw]"> 
            <section className="w-full h-[30vh] xl:h-[90vh] flex justify-center items-center gap-[2vw]">
                <div className="bg-[#c7c7c7ff] w-[32vw] h-[31.8vw] rounded-tr-[20px] rounded-br-[20px] overflow-hidden [box-shadow:10px_10px_5px_black] z-100 openImageAnimation">
                    <img src={AuthorsFace} alt={imageAlt || "Image of Raivo Kingovskis"} className="w-full h-full block"/>
                </div>

                <span className="bookRings top-[9vw] z-101"/>
                <span className="bookRings top-[16vw] z-101"/>
                <span className="bookRings top-[23vw] z-101"/>
                <span className="bookRings top-[30vw] z-101"/>
                <span className="bookRings top-[37vw] z-101" id="experience"/>

                {/* The page where my introduction will be written */}
                <div className="bg-[#272626ff] w-[33.8vw] h-[31.8vw] rounded-tl-[20px] rounded-bl-[20px] border-[#7a2dc2ff] border-l-2 [box-shadow:10px_10px_5px_black]">
                    <div className="h-auto flex justify-center items-center gap-[1vw]">
                        <span className="bg-[#7a2dc2ff] w-[0.8vw] h-[0.8vw] rounded-[50%]"/>
                        <h1 className="text-[white] text-[2.5vw] p-0 -mt-[0.2vw]">Raivo Kingovskis</h1>
                        <span className="bg-[#7a2dc2ff] w-[0.8vw] h-[0.8vw] rounded-[50%]"/>
                    </div>
                    <p className="text-[#c7c7c7ff] text-[1.48vw] mt-[0.2vw] mr-[1.3vw] mb-[1.4vw] ml-[2vw] text-justify">
                        {bigIntro1}
                        <br/>
                        {bigIntro2}
                        <br/>
                        {bigIntro3}
                    </p>
                </div>
            </section>

            <section ref={education} className={`duration-1000 ${educationIsVisible ? "my-[80px] opacity-100" : "my-[180px] opacity-0"}`}>
                <h1 onMouseOver={educationExplanationGrow} onMouseOut={educationExplanationShrink} className="text-white text-[1vw] text-center px-[35vw] [transition:0.5s] z-5">
                    {educationExplanation}
                </h1>
            </section>

            <section className="h-auto p-[1.8vw] flex flex-col items-center">
                    <Experience 
                        func={() => togglePopup("Experience_Popup")} 
                        ID="Experience_Popup"
                        title={experienceTitle} 
                        desc1={experienceExplanation1}
                        desc2={experienceExplanation2}
                        desc3={experienceExplanation3}
                        desc4={experienceExplanation4}
                        desc5={experienceExplanation5}
                        isOpen={openPopupId === "Experience_Popup"}
                    />
            </section>

            <section ref={projectTitle} id="projects" className={`h-auto w-full my-[3.8vw] duration-2000 flex justify-center items-center gap-[10px]
                                                                 ${projectTitleIsVisible ? "my-[3.8vw] opacity-100" : "my-[5vw] opacity-0"}`}>
                <span className="bg-[#7a2dc2ff] w-[3vw] xl:w-[0.8vw] h-[2.6vw] xl:h-[0.8vw] rounded-[50%]"/>
                <h1 className="text-[white] text-[13vw] xl:text-[6vw]">{projectsTitle}</h1>
                <span className="bg-[#7a2dc2ff] w-[3vw] xl:w-[0.8vw] h-[2.6vw] xl:h-[0.8vw] rounded-[50%]"/>
            </section>

            <section className="w-full h-auto my-[1vw] flex justify-center flex-wrap gap-[4vw]">
                {projectsData.map(({ title, desc, image, alt, location, location2, button, button2 }) => (
                    <Projects 
                        key={title}
                        title={title} 
                        explanation={desc} 
                        image={image} 
                        alt={alt} 
                        location={location} 
                        location2={location2} 
                        buttonName={button}
                        button2Name={button2}
                    />
                ))}
            </section>
            
        </main>
    );
}