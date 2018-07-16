import Add from './add/add'
import Edit from './edit/edit'
import Remove from './remove/remove'
import React from 'react'
import classes from './toolbar.css'

const Toolbar =(props)=>{
    return(
        <div className={classes.Toolbar}>
            <Remove click={props.click}/>
            <Edit />
        </div>
    )
}

export default Toolbar;