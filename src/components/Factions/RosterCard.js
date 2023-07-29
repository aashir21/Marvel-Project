import React from 'react'

import "./RosterCard.css"

import {handleClick} from "./data"

function RosterCard(props) {



  return (
    <>

        <div className='roster-card' onClick={() => {handleClick(props.id, props.factionName);}}>
            <img className='roster-card-img' src={props.img}></img>
            <h1 className='roster-card-title'>{props.name}</h1>
        </div>

    </>
  )
}

export default RosterCard