import './App.css';
import Header from './Components/Layout/Header';
import Body from './Components/Layout/Body';
import Footer from './Components/Layout/Footer';

import Logo from "./Assets/Logos/cyol_logo_form.png"
import { saveAs } from 'file-saver';

import { useState, useEffect, useRef } from 'react';
import ContactForm from './Components/Contents/ContactForm';
import Navbutton from './Components/Reused/Navbutton';

import { Routes, BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [showForm, setShowForm] = useState(false);
  const [buttonView, setButtonView] = useState(true)

  const pageTop = useRef(null)

  const [scrollSection, setScrollSection] = useState('');

  const buttons = [
    {
      title:"Download the product brochure",
      class:"col-12",
      subClass:"Brochure",
      navigater:"",
      action:true,
    },

    {
      title:"Visit our website",
      class:"col-6",
      subClass:"Website",
      navigater:"https://thecyol.com/",
      action:false,
    },

    {
      title:"Product overview",
      class:"col-6",
      subClass:"Overview",
      navigater:"",
      action:false,
    },
  ]

  const handle_Navigation =(_action, e)=> {
    if(_action) {
      e.preventDefault();
      
      const pdfURL = require('./Assets/Files/CYOL_brouchure.pdf');
      saveAs(pdfURL,'CYOL Product brochure.pdf')
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const request = params.get('request');
    
    if (request != null && request == 1) {
      setShowForm(true)
      setButtonView(false)
    }
  }, []);

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

  const view_Form =()=> {
    setShowForm(!showForm)
  }

  useEffect(() => {
    if(scrollSection == 'home') {
      pageTop.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }, [scrollSection]);

  return (
    <div className={showForm? "App-Stop":"App"}>
      <Router>
          <Routes>
              <Route path='/' element={
                  <div className="Main-Web-Site">
                      <div className={showForm? "Show-Form":"Hide-Form"}>
                        <ContactForm hide_Popup={view_Form} Status={showForm} Handler={buttonView}/>
                      </div>
      
                      <div className="Hero-Image"  style={{ transform: transformStyle }}>
                          <div className={scrolled?"Scrolled-Hero-Body":"Align-Hero"}/>
                      </div>

                      <div className="Header-Margin" ref={pageTop}/>

                      <Header scroll_Wanted={identity_Scroller} get_Form={view_Form}/>
                      <Body Section={scrollSection} get_Form={view_Form}/>
                      <Footer scroll_Wanted={identity_Scroller} get_Form={view_Form}/>
                  </div>
              } />

              <Route path='/dashboard' element={
                  <div className="QR-Dashboard">
                      <div className="Header-Dashboard">
                        <img src={Logo}/>
                      </div>

                      <div className="Navigations px-3 px-sm-5">
                        <div className="Background mt-3 mt-sm-5">
                          <div className="row g-0 Align-Background">
                            {buttons.map((button) => (
                              <div className={button.class}>
                                <a href={button.navigater} onClick={(e) => handle_Navigation(button.action, e)}>
                                  <Navbutton Button={button} Styler={button.subClass}/>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="Requesting mt-4 d-flex flex-column align-items-center">
                          <p className="text-center">Unlock the full potential of our product</p>
                          <a href="https://thecyol.com/?request=1"><button>Request Demo</button></a>
                        </div>
                       </div>
                    </div>
                  }/>
            </Routes>
      </Router>  
    </div>
  );
}

export default App;
