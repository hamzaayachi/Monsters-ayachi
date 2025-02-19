import React from "react";
import {Card} from '../Card/Card.js';

import '../CardList/CardList.css'




export const CardList = (props) =>{
    return(
        <div className="card-list" >
              {props.monsters.map(monster =>(
            <Card  key={monster.id} monster={monster} /> 
          ))}
         </div>
    )
}