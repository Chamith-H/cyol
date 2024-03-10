import "../../Styles/Layout/Footer.css";
import Logo from "../../Assets/Logos/cyol_logo.png";

const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="mx-lg-5 px-5">
        <div className="row gx-4 gy-5">
          <div className="col-md-12 col-lg-3 px-md-5 px-lg-0 Footer-Brand d-flex justify-content-center justify-content-lg-start align-items-center">
            <img className="Footer-Logo mb-4" src={Logo} alt="" />
          </div>

          <div className="col-md-9 col-lg-7 Footer-Address">
            <p>
              <i class="bi bi-geo-alt-fill"></i>U102, 46 GRAINGERS ROAD,{" "}
              <br></br>WEST FOOTSCRAY VIC 3012,
              <br></br>
              Australia
              <br></br>
              <br></br>
              61, Kynsey Road, Colombo 08
              <br></br>
              Sri Lanka
            </p>
            <p>
              <i class="bi bi-envelope-at-fill mt-5 mt-md-0"></i>
              <a href="mailto:info@thecyol.com">info@thecyol.com</a>

              <i class="bi bi-linkedin custom-size mt-5 mt-md-3"></i>
              <a href="https://www.linkedin.com/company/thecyol/">
                www.linkedin.com/company/thecyol
              </a>
            </p>
            <p>
              <i class="bi bi-telephone mt-5 mt-md-0"></i>
              <a href="tel:+94771510709"> +94 (771) 510 709</a>{" "}
              <a href="tel:+94773131313"> +94 (773) 131 313</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 Navigation-Footer d-flex flex-column align-items-center align-items-md-end">
            <h5 className="mt-5 mt-md-1">Quick Links</h5>
            <p type="button" onClick={() => props.scroll_Wanted("services")}>
              Services
            </p>
            <p type="button" onClick={() => props.scroll_Wanted("about")}>
              About us
            </p>
            <p type="button" onClick={props.get_Form}>
              Request Demo
            </p>
          </div>

          <div className="col-12 Footer-End">
            <p className="text-center">
              Copyright &copy; 2023 CYOL. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
