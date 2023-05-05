import { useState, useEffect } from "react";
import "../../Styles/Reused/InputField.css"

const InputField =( props )=> {

    const [startedTyping, setStartedTyping] = useState(false);
    const [checkValue, setCheckValue] = useState("")

    const [fieldStatus, setFieldStatus] = useState(true)

    const [isValid, setIsValid] = useState(true);
    const [validClass, setValidClass] = useState('Type-Focused')

    const get_Values =async( event )=> {
        await props.Entered(event);
        await setCheckValue(event.target.value);
        
        setIsValid(event.target.validity.valid);
    }

    const get_Focused =()=> {
        setStartedTyping(true)
    }

    const make_Default =()=> {
        if(checkValue == "" && fieldStatus) {
            setStartedTyping(false)
        }
    }

    useEffect(() => {
        if(props.Submited) {
            if(!isValid || (props.Required && checkValue == "")) {
                setValidClass('Type-Unvalid')
                get_Focused()
                setFieldStatus(false)
            }

            else {
                setValidClass('Type-Focused')
                setFieldStatus(true)
            }
        }

    }, [props.Submited]);

    return (
        <div className={fieldStatus?"InputField default-Input":"InputField Error-Input"}>
            <input  type={props.Type} 
                    onFocus={get_Focused}
                    onChange={get_Values}
                    onBlur={make_Default}
                    value={props.Value}
                    pattern={props.Pattern}
                    required={props.Required}
                    title={props.Validation}
            />

            <p className={startedTyping? `${validClass}`:"Type-Unfocused"}>{props.Placeholder}</p>
        </div>
    )
}

export default InputField;