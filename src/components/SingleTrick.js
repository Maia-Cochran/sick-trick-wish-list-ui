import React from 'react'

const Trick = ({ id, stance, name, obstacle, tutorial }) => {
    return(
    <div className='trick'>
        <p>{id}</p>
        <p>{stance}</p>
        <p>{name}</p>
        <p>{obstacle}</p>
        <p>{tutorial}</p>
    </div>
   ) 
}

export default Trick;