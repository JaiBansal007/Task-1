import React from 'react'
import "../stylesheet/LargeCard.css"
const LargeCard = ({text,number,icon}) => {
  return (
    <div id="largeCard-main">
      <div id="largemain-left">
        <div id="upper-left">{number}</div>
        <div id="bottom-left">{text}</div>
      </div>
      <div id="largemain-right">{icon}</div>
    </div>
  )
}

export default LargeCard;
