import { useState } from "react";
import "../../Styles/Reused/InputField.css"

const InputField =( props )=> {

    const [startedTyping, setStartedTyping] = useState(false);
    const [value, setValue] = useState("")

    const get_Values =( event )=> {
        setValue(event.target.value)
    }

    const make_Default =()=> {
        if(value == "") {
            setStartedTyping(false)
        }
    }

    return (
        <div className="InputField">
            <input  type={props.Type} 
                    onFocus={()=> setStartedTyping(true)}
                    onChange={get_Values}
                    onBlur={make_Default}
            />

            <p className={startedTyping? "Type-Focused":"Type-Unfocused"}>{props.Placeholder}</p>
        </div>
    )
}

export default InputField;