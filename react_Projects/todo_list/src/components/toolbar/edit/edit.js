import React from 'react'
import classes from './edit.css'
const edit =(props)=>{

    return(
        <div className={classes.ButtonDiv}>
        <button className={classes.Edit}
        onClick={props.click}><i className="fa fa-pencil" aria-hidden="true"></i></button>
        </div> 
    )

}

export default edit;