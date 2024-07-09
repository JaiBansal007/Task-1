import React from 'react'
import "../stylesheet/BottomRightDash.css"
import SmallCard from './SmallCard'
const BottomRightDash = () => {
  const data = [
    {
      name: 'David',
      city: 'Rome, Italy',
      imageUrl: 'https://randomwordgenerator.com/img/picture-generator/57e9dc434956ab14f1dc8460962e33791c3ad6e04e507440772872dc9244cc_640.jpg'
    },
    {
      name: 'Emma',
      city: 'Paris, France',
      imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'Liam',
      city: 'Berlin, Germany',
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      name: 'Olivia',
      city: 'Madrid, Spain',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Noah',
      city: 'Amsterdam, Netherlands',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      name: 'Ava',
      city: 'Vienna, Austria',
      imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      name: 'William',
      city: 'Zurich, Switzerland',
      imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
      name: 'Sophia',
      city: 'Copenhagen, Denmark',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
      name: 'James',
      city: 'Brussels, Belgium',
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
      name: 'Isabella',
      city: 'Stockholm, Sweden',
      imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    {
      name: 'Benjamin',
      city: 'Lisbon, Portugal',
      imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg'
    },
    {
      name: 'Mia',
      city: 'Oslo, Norway',
      imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg'
    },
    {
      name: 'Lucas',
      city: 'Dublin, Ireland',
      imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
      name: 'Amelia',
      city: 'Helsinki, Finland',
      imageUrl: 'https://randomuser.me/api/portraits/women/7.jpg'
    },
    {
      name: 'Henry',
      city: 'Athens, Greece',
      imageUrl: 'https://randomuser.me/api/portraits/men/8.jpg'
    },
    {
      name: 'Evelyn',
      city: 'Prague, Czech Republic',
      imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg'
    },
    {
      name: 'Alexander',
      city: 'Warsaw, Poland',
      imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg'
    },
    {
      name: 'Harper',
      city: 'Budapest, Hungary',
      imageUrl: 'https://randomuser.me/api/portraits/women/9.jpg'
    },
    {
      name: 'Sebastian',
      city: 'Sofia, Bulgaria',
      imageUrl: 'https://randomuser.me/api/portraits/men/10.jpg'
    },
    {
      name: 'Charlotte',
      city: 'Tallinn, Estonia',
      imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg'
    }
  ];
  
  
  return (
    <div id="dashright">
      <span style={{height:'auto',width:'auto',color:'#287afe',fontSize:'27px',fontWeight:'bold',fontFamily:'sans-serif'}}>Recent Coustomers</span>
      <div id="users" style={{overflowY:'scroll'}}>
        {data.map((item,index)=>(
          <SmallCard name={item.name} city={item.city} url={item.imageUrl}/>
        ))}
      </div>

    </div>
  )
}

export default BottomRightDash
