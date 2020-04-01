import React, { Fragment } from 'react'
//import './TopStory.css'

const TopStory = (props) => {
    return(
        <Fragment>
            <ul>
                <li>
                    <img src={props.src} alt={props.alt} />
                    <p>{ props.content }</p>
                </li>
            </ul>
        </Fragment>
    )
}

export default TopStory