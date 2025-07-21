import "./Projects.css"

export default function Projects({image, alt, title, explanation, location, buttonName}) {

    return(
        <article>
            <div className="imageContainer">
                <img src={image} alt={alt || "Project image"} loading="lazy" />
            </div>

            <h2>
                {title || "Project title"}
            </h2>

            <div className="explenationContainer">
                <p>
                    {explanation || "Very good website"}
                </p>
            </div>

            {location && (
                <div className="linkContainer">
                    <a href={location} target="_blank" rel="noopener noreferrer">
                        {buttonName || "Visit"}
                    </a>
                </div>
            )}
        </article>
    );
}