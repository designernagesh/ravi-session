import React from 'react'

function UsingCSS(){

    const fontColor = {
        color: 'black',
        backgroundColor: 'yellow',
        padding: '50px',
        fontSize: '18px',
        lineHeight: '30px',
        margin: '50px',
        border: '5px solid red',
        borderRadius: '50px 10px 50px 10px'   // Top Right Bottom Left
    }
    return(
        <>
           { /* <h1 style={{color: "red"}}>Simple Form</h1>  */ }
           
           <p style={fontColor}>Since the inline CSS is written in a JavaScript object, properties with two names, like background-color, must be written with camel case syntax:
           Since the inline CSS is written in a JavaScript object, properties with two names, like background-color, must be written with camel case syntax:  </p>
        </>
    )
}

export default UsingCSS