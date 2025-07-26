import Projects from './Projects/Projects.jsx'
import Experience from './ExperienceEducation/Experience.jsx'
import PurpleCircles from './assets/PurpleCircles.jsx'
import DisciplinatorsScreenshot from './assets/Disciplinators_screenshot.png'
import SEO_Screenshot from './assets/SEO_screenshot.png'
import SandboxScreenshot from './assets/Sandbox_screenshot.png'
import Magic8BallScreenshot from './assets/Magic_8-Ball_Screenshot.png'
import AuthorFace from './assets/authorFace.jpg'
import { useLanguage } from './App.jsx'

export default function Middle(){

    const { t } = useLanguage();
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
          } = t.middle;

    //the function that makes the popup appear below either the Experience of Education button's
    const togglePopup = (id) => {
        const popup = document.getElementById(id);
        if(popup) {
            popup.style.display = popup.style.display === "block" ? "none" : "block";
        }
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
        <main> 
            <PurpleCircles />

            {/* The section where my introduction and face are */}
            <div className="introSection">
                {/* The circle where my introduction will be written */}
                <div className="slideInFromBottom backgroundFigures backgroundTextArea left-[8%] top-[21%]">
                    <h1 className="mt-[8%]">Raivo Kingovskis</h1>
                    <p>
                        {bigIntro1}
                        <br/>
                        {bigIntro2}
                        <br/>
                        {bigIntro3}
                    </p>
                </div>

                {/* Circle where the image of my face goes */}
                <div className="veryBig backgroundFigures below left-[42%] top-[13%]">
                    <img alt={imageAlt || "Image of Raivo Kingovskis"} />
                </div>
            </div>

            {/* The section where my experience and education are described */}
            <div className="experienceSection">
                {experiancePopup.map(({ id, title, desc1 }) => (
                    <Experience 
                            key={id}
                            func={() => togglePopup(id)} 
                            ID={id} 
                            title={title} 
                            desc1={desc1}
                    />
                ))}
            </div>

            {/* My Projects */}
            <h1 id="projects">{projectsTitle}</h1>

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