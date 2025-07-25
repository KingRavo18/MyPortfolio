import './Header.css'
import { useLanguage } from '../App.jsx'

export default function Header(){

    const { t, setLanguage } = useLanguage();
    const { contact, projects, experience, introduction } = t.header;

    const navItems = [
        {href: "#contact", label: contact},
        {href: "#projects", label: projects},
        {href: "#experience", label: experience},
        {href: "#introduction", label: introduction},
    ]

    return(
        <header>
            <nav className="float-left">
                <ul>
                    <li>
                        <button className="text-[150%]" onClick={() => setLanguage('en')}>EN</button>
                    </li>
                    <li>
                        <button className="text-[150%]" onClick={() => setLanguage('lv')}>LV</button>
                    </li>
                </ul>
            </nav>
            <nav className="Navigation ml-[60%]">
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