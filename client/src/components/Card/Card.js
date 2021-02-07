import React from 'react';
import "./Card.css";

// Important: In React, to refere CSS classes in HTML structure, it uses the kewyword 'className'
//            which is non standard for JS or Angular
const Character = (props) => (
  <div className="card d-flex">
    <div className="imgHolder  d-flex align-content-center">
     <button className="imgBtn imgRnd10" onClick={() => props.slectCard(props.id)}>
       <img className="characterImg" alt={props.name} src={props.image} />    
     </button>   
    </div>                                          
  </div>

);

export default Character;