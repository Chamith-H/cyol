import './App.css';
import Header from './Components/Layout/Header';
import Body from './Components/Layout/Body';
import Footer from './Components/Layout/Footer';

import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className="App">
      <div className="Hero-Image">
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
