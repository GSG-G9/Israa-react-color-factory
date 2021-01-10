import React from 'react'
import {Link} from 'react-router-dom'

const Color = (props)=>{
    const {color} = props;
    return (
        <div style={{backgroundColor:color.value}}>
         <h1>This is {color.name}</h1>
         <h1>Isn't it beautiful?</h1>
         <h1><Link to="/">Go Back</Link></h1>
        </div>
    )

}

export default Color;