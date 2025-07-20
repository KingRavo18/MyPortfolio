import './Experience.css'

function Experience(props) {

    return(
        <>
            <article onClick={props.function}>
                <h1>{props.title}</h1>
            </article>
            <div id={props.ID} className='slidedown'>
                <p>{props.desc1}</p>
            </div>
        </>
    );
}
export default Experience