import React from 'react'
import "../stylesheet/BottomDashBoard.css"
import BottomLeftDash from './BottomLeftDash'
import BottomRightDash from './BottomRightDash'

const BottomDashBoard = () => {
  return (
    <>
    <div id="bottom-dash">
    <BottomLeftDash/>
    <BottomRightDash/>
    </div>
    </>
  )
}

export default BottomDashBoard
