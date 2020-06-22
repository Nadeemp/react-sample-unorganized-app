import React from 'react';

import pclasses from './Person.css'

const person = (props)=> {
 
 return(
        <div className={pclasses.Person}>
       
        <p onClick={props.click}>hi this is person-{props.name} </p>
        <input type="text" onChange={props.changed} value={props.name}/>
        
    </div>   
    )

}
export default person;