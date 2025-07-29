import { useState, useContext, createContext, useEffect } from 'react'
import Header from './Components/Header/Header.jsx'
import Middle from './Components/Middle.jsx'
import Footer from './Components/Footer/Footer.jsx'
import lv_translations from './languages/lv_translations.json'

const LanguageContext = createContext();
export function useLanguage(){ 
  return useContext(LanguageContext); 
}


export default function App() {

  const [language, setLanguage] = useState(lv_translations);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Header/>
      <Middle/>
      <Footer/>
    </LanguageContext.Provider>
  );
}
