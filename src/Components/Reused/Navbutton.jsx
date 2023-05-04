import "../../Styles/Reused/Navbutton.css"

const Navbutton =( props )=> {
    return (
        <div className="Navbutton">
            <div className={props.Styler}>
                <h2>{props.Button.title}</h2>
            </div>
        </div>
    )
}

export default Navbutton;