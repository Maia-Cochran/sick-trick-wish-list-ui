import React from 'react'
import './SingleTrick.css'

const Trick = ({ id, stance, name, obstacle, tutorial }) => {
    return(
    <div className='trick'>
        <p>{stance}</p>
        <p>{name}</p>
        <p>{obstacle}</p>
        <p>{tutorial}</p>
    </div>
   ) 
}

export default Trick;