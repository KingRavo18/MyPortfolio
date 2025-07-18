import Projects from './Projects/Projects.jsx'
import DisciplinatorsScreenshot from './assets/Disciplinators_screenshot.png'
import SEO_Screenshot from './assets/SEO_screenshot.png'

function Middle(){

    return(
        <main>
            <div className="introSection">
                <div className="medium backgroundFigures below top-[70px] left-[440px]"/>
                <div className="medium backgroundFigures top-[90px] left-[900px]"/>
                <div className="small backgroundFigures top-[140px] left-[1220px]"/>
                <div id="introduction" className="big backgroundFigures top-[30px] left-[-140px]"/>
                <div className="backgroundFigures backgroundTextArea left-[100px] top-[130px]">
                    <h1 className="mt-[30px]">Raivo Kingovskis</h1>
                    <p></p>
                </div>
                <div className="big backgroundFigures below top-[220px] left-[960px]"/>
                <div className="veryBig backgroundFigures below left-[530px] top-[70px]">
                    <img></img>
                </div>
                <div className="big backgroundFigures below top-[440px] left-[10px]"/>
                <div className="verySmall backgroundFigures below top-[440px] left-[10px]"/>
                <div className="small backgroundFigures below top-[540px] left-[360px]"/>
                <div className="verySmall backgroundFigures below top-[590px] left-[510px]"/>
            </div>
            <h1 id="experiance">EXPERIANCE AND EDUCATION</h1>
            <h1 id="projects">PROJECTS</h1>
            <div className='projectSection'>
                <Projects title="Disciplinators" explanation="Explanation" image={DisciplinatorsScreenshot} alt="Disciplinators Webpage" location="https://disciplinators.kesug.com/"/>
                <Projects title="Disciplinators" explanation="Explanation" image={DisciplinatorsScreenshot} alt="" location="https://disciplinators.kesug.com/"/>
                <Projects title="SEO" explanation="Explanation" image={SEO_Screenshot} alt="SEO Webpage" location="https://seo-vtdt-project.vercel.app/"/>
                <Projects title="Disciplinators" explanation="Explanation" image={DisciplinatorsScreenshot} alt="" location="https://disciplinators.kesug.com/"/>
            </div>
        </main>
    );
}

export default Middle