import './Footer.css'
import { useLanguage } from '../App.jsx'

export default function Footer(){

    const { t } = useLanguage();
    const { contactTitle, phone, email, finalSignature } = t.footer;
    const githubUrl = "https://github.com/KingRavo18";                                        

    return(
        <footer id="contact">
            <div className='contact'>
                <h1>{contactTitle}</h1>
                <p>{phone}</p>
                <p>{email}</p>
                <p>Github:{' '} 
                    <a href={githubUrl}  target="_blank" rel="noopener noreferrer">
                        github.com/KingRavo18
                    </a>
                </p>
            </div>
            <p className='YearSign'>{new Date().getFullYear()} {finalSignature}</p>
        </footer>
    );
}