import { useState, useContext, createContext, useEffect } from 'react'
import Header from './Header/Header.jsx'
import Middle from './Middle.jsx'
import Footer from './Footer/Footer.jsx'
import translations from './languages/translations.json'

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function App() {

  const [language, setLanguage] = useState('en');
  const t = translations[language];

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <Header/>
      <Middle/>
      <Footer/>
    </LanguageContext.Provider>
  );
}
