import Projects from './Projects/Projects.jsx'
import Experience from './ExperianceEducation/Experience.jsx'
import DisciplinatorsScreenshot from './assets/Disciplinators_screenshot.png'
import SEO_Screenshot from './assets/SEO_screenshot.png'
import SandboxScreenshot from './assets/Sandbox_screenshot.png'
import Magic8BallScreenshot from './assets/Magic_8-Ball_Screenshot.png'

function Middle(){

    return(
        <main>
            <div className="introSection">
                <div className="slidingLeftAnimation medium backgroundFigures below top-[70px] left-[440px]"/>
                <div className="slidingRightAnimation medium backgroundFigures top-[90px] left-[900px]"/>
                <div className="slidingRightAnimationDelay small backgroundFigures top-[140px] left-[1220px]"/>
                <div id="introduction" className="slidingLeftAnimationDelay big backgroundFigures top-[30px] left-[-140px]"/>
                <div className="backgroundFigures backgroundTextArea left-[100px] top-[130px]">
                    <h1 className="mt-[30px]">Raivo Kingovskis</h1>
                    <p></p>
                </div>
                <div className="slidingRightAnimationDelay big backgroundFigures below top-[220px] left-[960px]"/>
                <div className="veryBig backgroundFigures below left-[530px] top-[70px]">
                    <img></img>
                </div>
                <div className="slidingLeftAnimation big backgroundFigures below top-[440px] left-[10px]"/>
                <div className="slidingLeftAnimationDelay verySmall backgroundFigures below top-[440px] left-[10px]"/>
                <div className="slidingLeftAnimationDelay small backgroundFigures below top-[540px] left-[360px]"/>
                <div id="experiance" className="verySmall backgroundFigures below top-[590px] left-[510px]"/>
            </div>
            <div className="medium backgroundFigures top-[950px] left-[-10px]"/>
            <div className="medium backgroundFigures top-[900px] right-[40px]"/>
            <div className="verySmall backgroundFigures top-[850px] left-[180px]"/>
            <div className="small backgroundFigures top-[700px] right-[290px]"/>
            <div className='experianceSection'>
                <Experience />
            </div>
            <div className="medium backgroundFigures below top-[1030px] right-[450px]"/>
            <div className="big backgroundFigures below top-[1230px] right-[650px]"/>
            <div className="verySmall backgroundFigures below top-[1200px] right-[40px]"/>
            <h1 id="projects">PROJECTS</h1>
            <div className='projectSection'>
                <Projects title="Sandbox" explanation="Explanation" image={SandboxScreenshot} alt="Sandbox Design Webpage" location="https://smuka-lapa.vercel.app/"/>
                <Projects title="Disciplinators" explanation="Explanation" image={DisciplinatorsScreenshot} alt="Disciplinators Webpage" location="https://disciplinators.kesug.com/"/>
                <Projects title="SEO" explanation="Explanation" image={SEO_Screenshot} alt="SEO Webpage" location="https://seo-vtdt-project.vercel.app/"/>
                <Projects title="Magic 8-Ball" explanation="Made for fun with javascript and simple css. A true, undisputable masterpiece." image={Magic8BallScreenshot} alt="Magic 8-Ball Webpage" location="https://jubilant-enigma-5gqpp4pp4qrgc4q79-5500.app.github.dev/front-end/"/>
            </div>
            <div className="small backgroundFigures below top-[1580px] right-[70px]"/>
            <div className="medium backgroundFigures below top-[1630px] left-[70px]"/>
            <div className="small backgroundFigures below top-[1750px] left-[260px]"/>
            
        </main>
    );
}

export default Middle