import "../../Styles/Layout/Header.css";
import logo from "../../Assets/Logos/cyol_logo.png";
import Navlinks from "../Reused/Navlinks";

const Header =()=> {
    return (
        <div className="Header sticky-top">
            <div className="mx-5 px-5 Align-Header">
                <div className="Brand">
                    <img src={logo} alt="CYOL logo" />
                </div>

                <div className="Navigations">
                    <Navlinks/>
                </div>
            </div>
        </div>
    )
}
export default Header;