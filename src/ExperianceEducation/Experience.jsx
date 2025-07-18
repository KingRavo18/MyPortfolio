import './Experience.css'

function popupEducation() {
    const popup = document.getElementById("Education_Popup");

    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}
function popupExperience() {
    const popup2 = document.getElementById("Experience_Popup");

    if (popup2.style.display === "block") {
        popup2.style.display = "none";
    } else {
        popup2.style.display = "block";
    }
}

function Experience() {

    return(
        <>
            <article onClick={popupEducation}>
                <h1>EDUCATION</h1>
            </article>
            <div id="Education_Popup" className='slidedown'>
                <p>EDUCATION</p>
            </div>
            <article onClick={popupExperience}>
                <h1>EXPERIENCE</h1>
            </article>
            <div id="Experience_Popup" className='slidedown'>
                <p>EXPERIENCE</p>
            </div>
        </>
    );
}
export default Experience