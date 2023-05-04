import "../../Styles/Reused/Navlinks.css";

const Navlinks =( props )=> {
    return (
        <div className="Navlinks d-flex flex-column flex-md-row">
            <button onClick={()=> props.scroll_Until('home')}>Home</button>
            <button onClick={()=> props.scroll_Until('services')}>Services</button>
            <button onClick={()=> props.scroll_Until('about')}>About Us</button>
            <button onClick={props.form_Popup}>Request Demo</button>
        </div>
    )
}

export default Navlinks;