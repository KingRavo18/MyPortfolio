import './Experience.css'

export default function Experience({func, title, ID, desc1}) {

    return(
        <>
            <article onClick={func}>
                <h1>{title || "Untitled"}</h1>
            </article>

            <div id={ID} className='slidedown'>
                <p>{desc1 || "No description available"}</p>
            </div>
        </>
    );
}