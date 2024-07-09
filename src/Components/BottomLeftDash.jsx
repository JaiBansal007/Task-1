import React from 'react'
import "../stylesheet/BottomLeftDash.css"
import TableSmallCard from './TableSmallCard'
const BottomLeftDash = () => {
    const data = [
        {
          itemname: 'Refrigerator',
          price: 1200,
          status: 'Paid',
          destination: 'Delivered',
          color: '#8DE02C' // light green
        },
        {
          itemname: 'Fan',
          price: 1200,
          status: 'Paid',
          destination: 'Pending',
          color: '#FFD700' // gold
        },
        {
          itemname: 'Refrigerator',
          price: 1200,
          status: 'Due',
          destination: 'Return',
          color: '#FF6347' // tomato red
        },
        {
          itemname: 'Refrigerator',
          price: 1200,
          status: 'Paid',
          destination: 'Delivered',
          color: '#8DE02C' // light green
        },
        {
          itemname: 'Cooler',
          price: 1200,
          status: 'Paid',
          destination: 'Delivered',
          color: '#8DE02C' // light green
        },
        {
          itemname: 'Refrigerator',
          price: 1200,
          status: 'Paid',
          destination: 'Delivered',
          color: '#8DE02C' // light green
        },
        {
          itemname: 'Refrigerator',
          price: 1200,
          status: 'Due',
          destination: 'In Progress',
          color: '#1E90FF' // dodger blue
        },
        {
          itemname: 'Tube Light',
          price: 1200,
          status: 'Paid',
          destination: 'Delivered',
          color: '#8DE02C' // light green
        },
        {
          itemname: 'Refrigerator',
          price: 1200,
          status: 'Due',
          destination: 'Delivered',
          color: '#8DE02C' // light green
        },
        {
          itemname: 'Refrigerator',
          price: 1200,
          status: 'Paid',
          destination: 'Delivered',
          color: '#8DE02C' // light green
        },
        {
          itemname: 'Air Conditioner',
          price: 3000,
          status: 'Paid',
          destination: 'Shipped',
          color: '#FFA500' // orange
        },
        {
          itemname: 'Washing Machine',
          price: 2500,
          status: 'Paid',
          destination: 'Delivered',
          color: '#8DE02C' // light green
        },
        {
          itemname: 'Microwave Oven',
          price: 800,
          status: 'Due',
          destination: 'Pending',
          color: '#FFD700' // gold
        },
        {
          itemname: 'Laptop',
          price: 1500,
          status: 'Paid',
          destination: 'Out for Delivery',
          color: '#9370DB' // medium purple
        },
        {
          itemname: 'Television',
          price: 2000,
          status: 'Due',
          destination: 'Cancelled',
          color: '#A9A9A9' // dark grey
        }
      ];
      
      
  return (
    <div id="dashleft">
        <div id="top-dashleft">
            <span style={{height:'auto',width:'auto',color:'#287afe',fontSize:'22px',fontWeight:'bold',fontFamily:'sans-serif'}}>Recent Orders</span>
            <span style={{height:'auto',width:'auto',color:'white',fontSize:'16px',fontWeight:'medium',fontFamily:'sans-serif',backgroundColor:'#287AFE',padding:'6px',paddingLeft:'5px',paddingRight:'5px',borderRadius:'4px'}}>View All</span>
        </div>
        <table>
            <div class="format">
                <span style={{height:'auto',width:'35%',textAlign:'start'}} className='heading-names'>Name</span>
                <span  style={{height:'auto',width:'15%',textAlign:'left'}} className='heading-names'>Price</span>
                <span style={{height:'auto',width:'15%',textAlign:'center'}} className='heading-names'>Payment</span>
                <span  style={{height:'auto',width:'35%',textAlign:'end'}} className='heading-names'>Status</span>
            </div>
            <div id="items-data">
                {data.map((item,index)=>(
                    <div id="card" class="format" style={{borderBottom:"1px solid #999999"}}>
                    <span style={{height:'auto',width:'35%',textAlign:'start'}} className='items'>{item.itemname}</span>
                    <span  style={{height:'auto',width:'15%',wordSpacing:'2px',textAlign:'left'}} className='items'>{item.price}</span>
                    <span style={{height:'auto',width:'15%',textAlign:'center'}} className='items'>{item.status}</span>
                    <span  style={{height:'auto',width:'35%',textAlign:'end'}} className='items'><span style={{color:'white',backgroundColor:`${item.color}`,padding:'4px',borderRadius:'5px',fontSize:'15px'}}>{item.destination}</span></span>
                </div>
                 ))}
            </div>

        </table>
    </div>
  )
}

export default BottomLeftDash
