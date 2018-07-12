import React from 'react'


const SearchResult=(props)=>{
    return(
        
    <article >
        <iframe src={props.artwork} > </iframe>
        <h3>Artist Name: {props.artistName}</h3>
        <h3>Track Name: {props.trackName}</h3>
        <div>
            <div>{props.longDescription}</div>
        </div>
        <hr/>
        </article>
       

    )
    
}

export default SearchResult;