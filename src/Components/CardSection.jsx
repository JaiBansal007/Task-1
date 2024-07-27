import React from 'react'
import "../stylesheet/CardSection.css"
import LargeCard from './LargeCard'
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const CardSection = () => {
  return (
    <div id="CardSection-main">
        <LargeCard text={"Daily Saving"} number={1504} icon={<VisibilityOutlinedIcon fontSize='large'/>}/>
        <LargeCard text={"Spend"} number={8090} icon={<AttachMoneyIcon fontSize='large'/>}/>
        {/* <LargeCard text={"Comment"} number={204} icon={<InsertCommentOutlinedIcon fontSize='large'/>}/> */}
        <LargeCard text={"Saving"} number={1004} icon={<AddCardOutlinedIcon fontSize='large'/>}/>
    </div>
  )
}

export default CardSection
