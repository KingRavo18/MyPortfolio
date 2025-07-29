import './Header.css'
import {useLanguage} from '../../App.jsx'
import lv_translations from '../../languages/lv_translations.json'
import en_translations from '../../languages/en_translations.json'

export default function Header(){

    const { language, setLanguage } = useLanguage();
    const { contact, projects, experience, introduction } = language.header;

    const navItems = [
        {href: "#contact", label: contact},
        {href: "#projects", label: projects},
        {href: "#experience", label: experience},
        {href: "#introduction", label: introduction},
    ]

    const translationButtons = [
        {languageSelected: en_translations, title: "EN"},
        {languageSelected: lv_translations, title: "LV"},
    ]

    return(
        <header>
            <nav className='language'>
                <ul>
                    {translationButtons.map(({ languageSelected, title }) => (
                    <li key={title}>
                        <button onClick={() => setLanguage(languageSelected)}>{title}</button>
                    </li>
                    ))}
                </ul>
            </nav>
            <nav className="navigation">
                <ul>
                    {navItems.map(({ href, label }) => (
                    <li key={href}>
                        <a href={href}>
                            <button>{label}</button>
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}