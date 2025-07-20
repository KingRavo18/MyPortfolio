import './Experience.css'

function Experience({func, title, ID, desc1}) {

    return(
        <>
            <article onClick={func}>
                <h1>{title}</h1>
            </article>

            <div id={ID} className='slidedown'>
                <p>{desc1}</p>
            </div>
        </>
    );
}
export default Experience