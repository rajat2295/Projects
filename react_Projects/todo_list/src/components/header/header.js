import React from 'react';
import classes from './header.css'
const header = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Header}>
                <h1>{props.content}</h1>
            </div>
        </div>
    )
}
export default header;