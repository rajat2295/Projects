import React from 'react'
import classes from './remove.css'
const remove =(props)=>{
    return(<div className={classes.ButtonDiv}>
        <button className={classes.Remove}
        onClick={props.click}><i className="fa fa-trash" aria-hidden="true"></i></button>
         </div> 
        )
    
}

export default remove;