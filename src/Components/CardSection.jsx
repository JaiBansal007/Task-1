import React from 'react'
import "../stylesheet/CardSection.css"
import LargeCard from './LargeCard'
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
const CardSection = () => {
  return (
    <div id="CardSection-main">
        <LargeCard text={"Daily viewes"} number={1504} icon={<VisibilityOutlinedIcon fontSize='large'/>}/>
        <LargeCard text={"Sales"} number={80} icon={<ShoppingCartOutlinedIcon fontSize='large'/>}/>
        <LargeCard text={"Comment"} number={204} icon={<InsertCommentOutlinedIcon fontSize='large'/>}/>
        <LargeCard text={"Earning"} number={104} icon={<AddCardOutlinedIcon fontSize='large'/>}/>
    </div>
  )
}

export default CardSection
