import "../../Styles/Layout/Header.css";
import logo from "../../Assets/Logos/cyol_logo.png";
import toggler from "../../Assets/Icons/Toggler.png"
import Navlinks from "../Reused/Navlinks";

import { useState, useEffect } from "react";


const Header =()=> {
    const [scrolled, setScrolled] = useState(false);
    const [togglerExpand, setTogglerExpand] = useState(false);

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
      <div className="sticky-top">
        <div className={scrolled? 'Header Scrolled-Header': 'Header'}>
            <div className="mx-4 mx-sm-5 px-lg-5 Align-Header">
                <div className="Brand">
                    <img src={logo} alt="CYOL logo" />
                </div>

                <div className="Navigations d-none d-md-flex">
                    <Navlinks/>
                </div>

                <div className="Toggler d-block d-md-none">
                    <img src={toggler} alt="" type="button" onClick={()=> setTogglerExpand(!togglerExpand)}/>
                </div>
            </div>

            {togglerExpand && (
                <div className={scrolled?"Toggler-Menu-Mobile-Scrolled":"Toggler-Menu-Mobile"}>

                </div>
            )}
        </div>
      </div>
    )
}
export default Header;