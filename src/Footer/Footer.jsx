import './Footer.css'
import translations from '../languages/translations.json';

function Footer(){

    const t = translations.en.footer;

    return(
        <footer id="contact">
            <div className='contact'>
                <h1>{t.contactTitle}</h1>
                <p>{t.phone} +371 28 378 300</p>
                <p>{t.email} raivokingovskis05@gmail.com</p>
                <p>Github: <a href="https://github.com/KingRavo18">https://github.com/KingRavo18</a></p>
            </div>
            <p className='YearSign'>{new Date().getFullYear()} {t.finalSignature}</p>
        </footer>
    );
}

export default Footer