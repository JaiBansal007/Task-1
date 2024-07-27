import React, { useState } from 'react'
import "../stylesheet/SideBar.css"
import SideBarCard from './SideBarCard'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import LastPageIcon from '@mui/icons-material/LastPage';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const SideBar = () => {
    const [toggle,settoggle]=useState(false);
  return (
    <div id="main-left" style={{width:toggle?'3%':'22%',
    }}>
      <div id="main-bar">
        <div id="brandname" style={{width:toggle?'0%':'90%',visibility:toggle?'hidden':'visible'}}>DashBoard</div>
        <LastPageIcon 
            onClick={() => settoggle(c => !c)} 
            style={{ 
                transform: toggle ? 'rotate(-180deg)' : 'rotate(0deg)', 
                transition: 'all 0.2s ease' ,
            }} 
            />      
        </div>
        <SideBarCard toggle={toggle} icon={<HomeIcon/>} text={"Home"} />
        <SideBarCard toggle={toggle} icon={<QuestionMarkIcon/>} text={"Help"} />
        <SideBarCard toggle={toggle} icon={<SettingsIcon/>} text={"Settings"} active/>
        <SideBarCard toggle={toggle} icon={<LockIcon/>} text={"Password"} />
        <SideBarCard toggle={toggle} icon={<ExitToAppIcon/>} text={"Sign out"} />
    </div>
  )
}

export default SideBar
