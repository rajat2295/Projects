import React from 'react'
import classes from './Inputs.css'
import Aux from '../hoc/Aux'

const Input = (props) => {
    let inputElement = null;
    switch (props.inputType) {
        case ('input'):
            inputElement = <input  className={classes.InputElement} {...props}/>
            break;
        case ('textarea'):
            inputElement = <textarea  className={classes.InputElement} {...props}/>
            break;
        default:
            inputElement = <input  className={classes.InputElement} {...props}/>


    }
    return (
        <Aux>
        <label className={classes.label}>{props.label}</label>
        {inputElement}
    </Aux>)

}

export default Input;