import './Footer.css'
import translations from '../languages/translations.json';

export default function Footer(){

    const t = translations.en.footer;

    return(
        <footer id="contact">
            <div className='contact'>
                <h1>
                    {t.contactTitle}
                </h1>
                <p>
                    {t.phone}
                </p>
                <p>
                    {t.email}
                </p>
                <p>
                    Github:{' '} 
                    <a href="https://github.com/KingRavo18" target="_blank" rel="noopener noreferrer">
                        github.com/KingRavo18
                    </a>
                </p>
            </div>
            <p className='YearSign'>
                {new Date().getFullYear()} {t.finalSignature}
            </p>
        </footer>
    );
}