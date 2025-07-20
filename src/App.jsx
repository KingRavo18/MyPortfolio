import Header from './Header/Header.jsx'
import Middle from './Middle.jsx'
import Footer from './Footer/Footer.jsx'
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header/>
      <Middle/>
      <Footer/>
    </>
  )
}

