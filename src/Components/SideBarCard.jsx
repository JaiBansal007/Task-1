import React, { useState } from 'react'
import "../stylesheet/SideBarCard.css"
const SideBarCard = ({icon,toggle,active,text}) => {
  return (
<div id="fullcard" style={{alignContent:toggle?'center':'space-around'}}>
    {icon}
        <div id="right-fullcard" style={{visibility:toggle?'hidden':'visible'}}>
            <div id="state-name" >{text}</div>
            <div id="right-dot" style={{backgroundColor:!active?'transparent':'visible'}}></div>
        </div>
    </div>
  )
}
export default SideBarCard
