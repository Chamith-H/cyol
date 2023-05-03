import "../../Styles/Contents/ContactForm.css"
import Logo from "../../Assets/Logos/cyol_logo.png"
import Demo from "../../Assets/Images/DemoBackground.jpg"
import InputField from "../Reused/InputField"

import { useState } from "react"

const ContactForm =( props )=> {
    const [startedTyping, setStartedTyping] = useState([false, false, false, false, false]);

    const inputs = [
        {
            name:'firstName',
            placeholder:'First Name'
        },

        {
            name:'lastName',
            placeholder:'Last Name'
        },

        {
            name:'email',
            placeholder:'Email'
        },

        {
            name:'phone',
            placeholder:'Company'
        },

        {
            name:'phone',
            placeholder:'Phone Number'
        },
    ]

    const Typing_Started =( focused )=> {
        const typeStatus = [false, false, false, false, false]

        const focusType = [...typeStatus];
        focusType[focused] = true;

        setStartedTyping(focusType)
    }

    return (
        <div className="ContactForm">
            <div className={props.Status?"Show-Form-Popup":"Hide-Form-Popup"}>
                {/* <img className="Demo-Background" src={Demo} alt="" /> */}
                <div className="Contact-Form-Box">
                    <div className="py-3 px-4 px-sm-5 Contact-Header-Background sticky-top">
                        <div className="Contact-Handler px-lg-5">
                            <img src={Logo} alt="" />

                            {props.Handler && (
                                <button onClick={props.hide_Popup}><i class="bi bi-caret-left-fill"></i> Back</button>
                            )}

                            {!props.Handler && (
                                <h6>Request a Demo</h6>
                            )}
                            
                        </div>
                    </div>

                    <div className="px-4 px-sm-5 Form-Handler py-5">
                        <div className="px-xl-5 mx-lg-5">
                        <div className="Form-Title px-md-5">
                            <h2 className="text-center">Transform your business with our solutions and experience the power of CYOL by requesting a Demo</h2>
                        </div>

                        <form action="" className="px-md-5">
                            <div className="row gy-4 gx-4 pt-5">
                                {inputs.map((input, index) => (
                                    <div className="col-12 col-sm-6">
                                        <InputField 
                                            Placeholder={input.placeholder}
                                            Started_Typing={()=> Typing_Started(index)}
                                            Focused={startedTyping[index]}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="col-sm-6 Form-Submitting pt-5">
                                <p className="me-4">Thank you for your interest in our solutions. We will be in touch with you shortly</p>
                                <button>Submit Request</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;