import React from 'react'
import classes from './SearchResult.css'



const SearchResult = (props) => {
   
    return (

        <div className={classes.Container}>
        <div className={classes.row}>
            <div className={classes.Col20}>
                <img src={props.artwork} className={classes.Image} />
            </div>
            <div className={classes.Col80}>
                <h3>Artist Name: {props.artistName}</h3>
                <h3>Track Name: {props.trackName}</h3>
                
                <div>
                    <div className={classes.Desc}>{props.longDescription}</div>
                </div>
                <div><hr /></div>
            </div>
           
        </div>
        </div>


    )

}

export default SearchResult;