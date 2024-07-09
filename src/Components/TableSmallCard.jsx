import React from 'react'

const TableSmallCard = () => {
  return (
    <>
    <div>
      <span style={{height:'auto',width:'35%',textAlign:'start'}} className='heading-names'>Name</span>
      <span  style={{height:'auto',width:'15%'}} className='heading-names'>Price</span>
      <span style={{height:'auto',width:'15%'}} className='heading-names'>Payment</span>
      <span  style={{height:'auto',width:'35%',textAlign:'end'}} className='heading-names'>Status</span>
    </div>
    </>
  )
}

export default TableSmallCard;
