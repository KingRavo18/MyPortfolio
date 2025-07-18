import './Footer.css'

function Footer(){

    return(
        <footer id="contact">
            <div className='contact'>
                <h1>Contact</h1>
                <p>Phone: +371 28 378 300</p>
                <p>Email: raivokingovskis05@gmail.com</p>
                <p>Github: <a href="https://github.com/KingRavo18">https://github.com/KingRavo18</a></p>
            </div>
            <p className='YearSign'>{new Date().getFullYear()} Raivo Kingovskis's Porftolio</p>
        </footer>
    );
}

export default Footer