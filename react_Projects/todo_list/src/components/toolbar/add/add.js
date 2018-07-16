import React from 'react'
import classes from './add.css'

const add =(props)=>{
    return(
        <div className={classes.ButtonDiv}>
        <button className={classes.Add} onClick={props.click}><i className="fa fa-plus" aria-hidden="true"></i></button>
        </div> 
    )

}

export default add;