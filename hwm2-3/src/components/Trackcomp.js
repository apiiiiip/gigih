import React from "react";

function Track({url,name}) {
    return(
        <div>
            <p>{name}</p>
            <img src={url}/>
        </div>
    )
}

export default Track;