import './Experience.css'

export default function Experience({func, title, ID, desc1, isOpen}) {

    return(
        <>
            <article onClick={func}>
                <h1>{title || "Untitled"}</h1>
            </article>

        {isOpen && (
            <div id={ID} className='slidedown'>
                <p>{desc1 || "No description available"}</p>
            </div>
        )}
        </>
    );
}