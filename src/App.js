import './App.css';
import Header from './Components/Layout/Header';
import Body from './Components/Layout/Body';
import Footer from './Components/Layout/Footer';
import { animateScroll as scroll } from 'react-scroll';

import { useState, useEffect, useRef } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const pageTop = useRef(null)

  const [scrollSection, setScrollSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 150) {
          setScrolled(true);
      } else {
          setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const zoomLevel = scrollY * 0.0009; 
  const transformStyle = `scale(${1 + zoomLevel})`;

  const identity_Scroller =async( selected )=> {
    await setScrollSection(selected)
    setScrollSection('')
  }

  useEffect(() => {
    if(scrollSection == 'home') {
      pageTop.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }, [scrollSection]);

  return (
    <div className="App">
      <div className="Hero-Image"  style={{ transform: transformStyle }}>
          <div className={scrolled?"Scrolled-Hero-Body":"Align-Hero"}/>
      </div>

      <div className="Header-Margin" ref={pageTop}/>

      <Header scroll_Wanted={identity_Scroller}/>
      <Body Section={scrollSection}/>
      <Footer/>
    </div>
  );
}

export default App;
