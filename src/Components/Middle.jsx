import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { useLanguage } from '../App.jsx'
import Projects from './Projects/Projects.jsx'
import Experience from './Experience/Experience.jsx'
import DisciplinatorsScreenshot from '../assets/Disciplinators_screenshot.png'
import SEO_Screenshot from '../assets/SEO_screenshot.png'
import SandboxScreenshot from '../assets/Sandbox_screenshot.png'
import Magic8BallScreenshot from '../assets/Magic_8-Ball_Screenshot.png'
import AuthorsFace from '../assets/Authors_Face.png'
import SmallReactProjectsScreenshot from '../assets/SmallReactProjects_screenshot.png'



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
            project2Explanation,
            project2Alt,
            project3Explanation,
            project3Alt,
            project4Explanation,
            project4Alt,
            project5Explanation,
            project5Alt
          } = language.middle;


    const [openPopupId, setOpenPopupId] = useState(null);
    //this toggles the experiances popup open and closed
    const togglePopup = (id) => {
        setOpenPopupId(prevOpenPopupId => (prevOpenPopupId === id ? null : id));
    }

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
        {
         title: "Small React Projects", 
         desc: project5Explanation, 
         image: SmallReactProjectsScreenshot, 
         alt: project5Alt, 
         location: "https://small-react-projects-eight.vercel.app/", 
         button: buttonName
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

    return(
        //The id is there to serve as a hook for the navigation bar
        <main id="introduction" className="pt-[4vw]"> 
            <section className="flex justify-center items-center gap-[2vw] w-full h-[90vh]">
                <div className="bg-[#c7c7c7ff] rounded-tr-[20px] rounded-br-[20px] w-[33.8vw] h-[31.8vw] overflow-hidden">
                    <img src={AuthorsFace} alt={imageAlt || "Image of Raivo Kingovskis"} className="w-full h-full block object-cover"/>
                </div>

                <span className="absolute rounded-[10px] bg-[#7a2dc2ff] w-[4.4vw] h-[0.5vw] left-[47.2vw] top-[9vw]"/>
                <span className="absolute rounded-[10px] bg-[#7a2dc2ff] w-[4.4vw] h-[0.5vw] left-[47.2vw] top-[16vw]"/>
                <span className="absolute rounded-[10px] bg-[#7a2dc2ff] w-[4.4vw] h-[0.5vw] left-[47.2vw] top-[23vw]"/>
                <span className="absolute rounded-[10px] bg-[#7a2dc2ff] w-[4.4vw] h-[0.5vw] left-[47.2vw] top-[30vw]"/>
                <span className="absolute rounded-[10px] bg-[#7a2dc2ff] w-[4.4vw] h-[0.5vw] left-[47.2vw] top-[37vw]" id="experience"/>

                {/* The page where my introduction will be written */}
                <div className="rounded-tl-[20px] rounded-bl-[20px] bg-[#272626ff] border-l-2 border-[#7a2dc2ff] w-[33.8vw] h-[31.8vw] [box-shadow:10px_10px_5px_rgb(38,36,36)]">
                    <div className="flex h-auto justify-center items-center gap-[1vw]">
                        <span className="bg-[#7a2dc2ff] rounded-[50%] w-[0.8vw] h-[0.8vw]"/>
                        <h1 className="text-[white] text-[2.5vw] p-0 -mt-[0.2vw]">Raivo Kingovskis</h1>
                        <span className="bg-[#7a2dc2ff] rounded-[50%] w-[0.8vw] h-[0.8vw]"/>
                    </div>
                    <p className="text-[#c7c7c7ff] mt-[0.2vw] mr-[1.3vw] mb-[1.4vw] ml-[2vw] text-[1.48vw] text-justify">
                        {bigIntro1}
                        <br/>
                        {bigIntro2}
                        <br/>
                        {bigIntro3}
                    </p>
                </div>
            </section>

            <section ref={education} className={`duration-1000 ${educationIsVisible ? "my-[80px] opacity-100" : "my-[180px] opacity-0"}`}>
                <h1 className="text-center text-white text-[3vw] px-[7vw]">{educationExplanation}</h1>
            </section>

            <section className="p-[1.8vw] flex-col flex items-center h-auto">
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

            <section ref={projectTitle} id="projects" className={`flex justify-center items-center gap-[10px] my-[3.8vw] h-auto w-full duration-2000
                                                                 ${projectTitleIsVisible ? "my-[3.8vw] opacity-100" : "my-[5vw] opacity-0"}`}>
                <span className="bg-[#7a2dc2ff] rounded-[50%] w-[0.8vw] h-[0.8vw]"/>
                <h1 className="text-[white] text-[6vw]">{projectsTitle}</h1>
                <span className="bg-[#7a2dc2ff] rounded-[50%] w-[0.8vw] h-[0.8vw]"/>
            </section>

            <section className="flex justify-center h-auto my-[1vw] w-full gap-[4vw] flex-wrap">
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
            </section>
            
        </main>
    );
}