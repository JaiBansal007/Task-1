import React from 'react'
import "../stylesheet/SmallCard.css"
const SmallCard = ({name,city,url}) => {
  return (
    <div id="small-card">
      <img src={url} alt="" style={{borderRadius:"50%",objectFit:'cover',width:'10%',height:'auto'}}/>
      <div id="details">
        <span style={{fontSize:'17px',color:'black',fontFamily:'sans-serif'}}>{name}</span>
        <span style={{fontSize:'13px',color:'#999999',fontFamily:'sans-serif'}}>{city}</span>
      </div>
    </div>
  )
}

export default SmallCard
