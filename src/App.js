import './App.css';
import Header from './Components/Layout/Header';
import Body from './Components/Layout/Body';
import Footer from './Components/Layout/Footer';
import { animateScroll as scroll } from 'react-scroll';

import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  function scrollToTop() {
    scroll.scrollToTop({ duration: 500, smooth: true });
  }

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

    const zoomLevel = scrollY * 0.0007; // adjust this value to control the zoom level
  const transformStyle = `scale(${1 + zoomLevel})`;

  return (
    <div className="App">
      <div className="Hero-Image"  style={{ transform: transformStyle }}>
          <div className={scrolled?"Scrolled-Hero-Body":"Align-Hero"}/>
      </div>

      <div className="Header-Margin"/>

      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
