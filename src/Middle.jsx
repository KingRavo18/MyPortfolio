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

                {/* Purple Circles (not important) */}

                <div className="slidingLeftAnimation medium backgroundFigures below top-[12%] left-[35%]"/>
                <div className="slidingRightAnimation medium backgroundFigures top-[16%] left-[70%]"/>
                <div className="slidingRightAnimationDelay small backgroundFigures top-[25%] left-[96%]"/>
                <div id="introduction" className="slidingLeftAnimationDelay big below backgroundFigures top-[6%] left-[-11%]"/>

                {/* The circle where my introduction will be written */}

                <div className="slideInFromBottom backgroundFigures backgroundTextArea left-[8%] top-[21%]">
                    <h1 className="mt-[8%]">Raivo Kingovskis</h1>
                    <p>Hello, I started programming for money but grew to enjoy it as well. 
                       So win, win! 
                       I studied it for four years and have gone through an internship too.
                       <br></br>
                       My greatest strengths focus on all things front-end and database related. 
                       However, I have ample experience with the backend as well.
                       In my free time, I like reading novels, and I do try to write them myself. 
                       I am as thorough with my code as with any word I read or write for the sake of my art.
                       <br></br>
                       Read further for details!
                    </p>
                </div>

                {/* Purple Circle (not important) */}

                <div className="slidingRightAnimationDelay big backgroundFigures below top-[40%] left-[74%]"/>

                {/* Circle where the image of my face goes */}

                <div className="veryBig backgroundFigures below left-[42%] top-[13%]">
                    <img src="" alt="Picture of Raivo Kingovskis"></img>
                </div>

                {/* Purple Circles (not important) */}

                <div className="slidingLeftAnimation big backgroundFigures below top-[78%] left-[0.8%]"/>
                <div className="slidingLeftAnimationDelay verySmall backgroundFigures below top-[79%] left-[0.8%]"/>
                <div className="slidingLeftAnimationDelay small backgroundFigures below top-[98%] left-[29%]"/>
                <div id="experiance" className="verySmall backgroundFigures below top-[107%] left-[40.2%]"/>

            </div>

            {/* Purple Circles (not important) */}

            <div className="medium backgroundFigures top-[950px] left-[-10px]"/>
            <div className="medium backgroundFigures top-[900px] right-[40px]"/>
            <div className="verySmall backgroundFigures top-[850px] left-[180px]"/>
            <div className="small backgroundFigures top-[700px] right-[290px]"/>

            {/* The section where my experiance and education are described */}

            <div className='experianceSection'>
                <Experience />
            </div>

             {/* Purple Circles (not important) */}

            <div className="medium backgroundFigures below top-[1030px] right-[450px]"/>
            <div className="big backgroundFigures below top-[1230px] right-[650px]"/>
            <div className="verySmall backgroundFigures below top-[1200px] right-[40px]"/>

            {/* My Projects */}

            <h1 id="projects">PROJECTS</h1>
            <div className='projectSection'>
                <Projects title="Sandbox" explanation="Explanation" image={SandboxScreenshot} alt="Sandbox Design Webpage" location="https://smuka-lapa.vercel.app/"/>
                <Projects title="Disciplinators" explanation="Explanation" image={DisciplinatorsScreenshot} alt="Disciplinators Webpage" location="https://disciplinators.kesug.com/"/>
                <Projects title="SEO" explanation="Explanation" image={SEO_Screenshot} alt="SEO Webpage" location="https://seo-vtdt-project.vercel.app/"/>
                <Projects title="Magic 8-Ball" explanation="Made for fun with javascript and simple css. A true, undisputable masterpiece." image={Magic8BallScreenshot} alt="Magic 8-Ball Webpage" location="https://magic-8-ball-seven.vercel.app/"/>
            </div>

            {/* Purple Circles (not important) */}

            <div className="small backgroundFigures below top-[1580px] right-[70px]"/>
            <div className="medium backgroundFigures below top-[1630px] left-[70px]"/>
            <div className="small backgroundFigures below top-[1750px] left-[260px]"/>
            
        </main>
    );
}

export default Middle