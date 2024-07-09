import React from 'react'
import "../stylesheet/RightBoard.css"
import NavBar from './NavBar'
import CardSection from './CardSection'
import BottomDashBoard from './BottomDashBoard'

const RightBoard = () => {
  return (
    <div id="rightboard">
      <NavBar/>
        <CardSection/>
        <BottomDashBoard/>
    </div>
  )
}

export default RightBoard
