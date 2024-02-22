import React from "react";
import './BasicHeading.css'

const BasicHeading = (prop) =>{
    return(
        <h3 id="heading" style={{fontFamily:"sans-serif"}}>{prop.text}</h3>
    )
}

export default BasicHeading;