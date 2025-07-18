import './Projects.css'

function Projects(props) {
    return(
        <article>
            <div className='imageContainer'>
                <img src={props.image} alt={props.alt}></img>
            </div>
            <h2>{props.title}</h2>
            <div className='explenationContainer'>
                <p>{props.explanation}</p>
            </div>
            <div className='linkContainer'>
                <a href={props.location}>Visit</a>
            </div>
        </article>
    );
}
export default Projects