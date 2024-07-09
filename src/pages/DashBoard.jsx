import React from 'react'
import SideBar from '../Components/SideBar'
import "../stylesheet/DashBoard.css"
import RightBoard from '../Components/RightBoard'

const DashBoard = () => {
  return (
    <div id="dashboard">
      <SideBar/>
      <RightBoard/>
    </div>
  )
}

export default DashBoard
