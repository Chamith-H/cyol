import "../../Styles/Layout/Header.css";
import logo from "../../Assets/Logos/cyol_logo.png";
import toggler from "../../Assets/Icons/Toggler.png"
import Navlinks from "../Reused/Navlinks";

import { useState, useEffect } from "react";


const Header =()=> {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 50) {
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
        <div className={scrolled? 'Header Scrolled-Header sticky-top': 'Header sticky-top'}>
            <div className="mx-4 mx-sm-5 px-lg-5 Align-Header">
                <div className="Brand">
                    <img src={logo} alt="CYOL logo" />
                </div>

                <div className="Navigations d-none d-md-flex">
                    <Navlinks/>
                </div>

                <div className="Toggler d-block d-md-none">
                    <img src={toggler} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Header;