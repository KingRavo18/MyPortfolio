import './Header.css'
import { useLanguage } from '../App.jsx'
import lv_translations from '../languages/lv_translations.json'
import en_translations from '../languages/en_translations.json'

export default function Header(){

    const { t, setLanguage } = useLanguage();
    const { contact, projects, experience, introduction } = t.header;

    const navItems = [
        {href: "#contact", label: contact},
        {href: "#projects", label: projects},
        {href: "#experience", label: experience},
        {href: "#introduction", label: introduction},
    ]

    const translationButtons = [
        {language: en_translations, title: "EN"},
        {language: lv_translations, title: "LV"},
    ]

    return(
        <header>
            <nav>
                <ul>
                    {translationButtons.map(({ language, title }) => (
                    <li key={title}>
                        <button className="text-[150%]" onClick={() => setLanguage(language)}>{title}</button>
                    </li>
                    ))}
                </ul>
            </nav>
            <nav className="Navigation">
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