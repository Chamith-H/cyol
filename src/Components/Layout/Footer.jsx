import "../../Styles/Layout/Footer.css"
import Logo from "../../Assets/Logos/cyol_logo.png"

const Footer =()=> {
    return (
        <div className="Footer">
            <div className="mx-lg-5 px-5">
                <div className="row gx-4 gy-5">
                    <div className="col-md-12 col-lg-3 px-md-5 px-lg-0 Footer-Brand d-flex flex-column align-items-center align-items-lg-start">
                        <img className="Footer-Logo mb-4" src={Logo} alt="" />
                    </div>

                    <div className="col-7 Footer-Address
                    ">
                        <p><i class="bi bi-geo-alt-fill"></i> 221/B, Baker Street</p>
                        <p><i class="bi bi-envelope-at-fill"></i> example@email.com</p>
                    </div>

                    <div className="col-md-4 col-lg-2 Navigation-Footer d-flex flex-column align-items-center align-items-lg-end">
                        <h5>Quick Links</h5>
                        <p>Services</p>
                        <p>About us</p>
                        <p>Request Demo</p>
                    </div>

                    <div className="col-12 Footer-End">
                        <p className="text-center">Copyright &copy; 2023 AVS. All Rights Reserved</p>
                
{/* 
                        <div className="Social-Icons d-flex pb-3 pb-md-0">
                            <div className="Icon-Background">
                                <h6><i class="bi bi-linkedin"></i></h6>
                            </div>

                            <div className="Icon-Background">
                                <h6><i class="bi bi-facebook"></i></h6>
                            </div>

                            <div className="Icon-Background">
                                <h6><i class="bi bi-twitter"></i></h6>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;