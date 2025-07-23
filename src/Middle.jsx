import Projects from './Projects/Projects.jsx'
import Experience from './ExperienceEducation/Experience.jsx'
import PurpleCircles from './assets/PurpleCircles.jsx'
import DisciplinatorsScreenshot from './assets/Disciplinators_screenshot.png'
import SEO_Screenshot from './assets/SEO_screenshot.png'
import SandboxScreenshot from './assets/Sandbox_screenshot.png'
import Magic8BallScreenshot from './assets/Magic_8-Ball_Screenshot.png'
import translations from './languages/translations.json'

export default function Middle(){

    const t = translations.en.middle;

    const togglePopup = (id) => {
        const popup = document.getElementById(id);
        if(popup) {
            popup.style.display = popup.style.display === "block" ? "none" : "block";
        }
    }

    return(
        <main> 
            <PurpleCircles />

            {/* The section where my introduction and face are */}
            <div className="introSection">
                {/* The circle where my introduction will be written */}
                <div className="slideInFromBottom backgroundFigures backgroundTextArea left-[8%] top-[21%]">
                    <h1 className="mt-[8%]">Raivo Kingovskis</h1>
                    <p>
                        {t.bigIntro1}
                        <br/>
                        {t.bigIntro2}
                        <br/>
                        {t.bigIntro3}
                    </p>
                </div>

                {/* Circle where the image of my face goes */}
                <div className="veryBig backgroundFigures below left-[42%] top-[13%]">
                    <img alt={t.imageAlt || "Image of Raivo Kingovskis"} />
                </div>
            </div>

            {/* The section where my experience and education are described */}
            <div className="experienceSection">
                <Experience func={() => togglePopup("Education_Popup")} 
                            ID="Education_Popup" 
                            title={t.educationTitle} 
                            desc1={t.educationExplanation1}
                />
                <Experience func={() => togglePopup("Experience_Popup")} 
                            ID="Experience_Popup" 
                            title={t.experienceTitle} 
                            desc1={t.experienceExplanation1}
                />
            </div>

            {/* My Projects */}
            <h1 id="projects">{t.projectsTitle}</h1>

            <div className="projectSection">
                <Projects title="Sandbox" 
                          explanation={t.project1Explanation} 
                          image={SandboxScreenshot} 
                          alt={t.project1Alt} 
                          location="https://smuka-lapa.vercel.app/" 
                          buttonName={t.buttonName}
                />
                <Projects title="Disciplinators" 
                          explanation={t.project2Explanation} 
                          image={DisciplinatorsScreenshot} 
                          alt={t.project2Alt} 
                          location="https://disciplinators.kesug.com/" 
                          buttonName={t.buttonName}
                />
                <Projects title="SEO" 
                          explanation={t.project3Explanation} 
                          image={SEO_Screenshot} 
                          alt={t.project3Alt} 
                          location="https://seo-vtdt-project.vercel.app/" 
                          buttonName={t.buttonName}
                />
                <Projects title="Magic 8-Ball" 
                          explanation={t.project4Explanation} 
                          image={Magic8BallScreenshot} 
                          alt={t.project4Alt} 
                          location="https://magic-8-ball-seven.vercel.app/" 
                          buttonName={t.buttonName}
                />
            </div>
            
        </main>
    );
}