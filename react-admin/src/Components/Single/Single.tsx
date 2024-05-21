import React from 'react'
import './Single.scss'
import { CartesianGrid, DefaultTooltipContent, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Tooltip } from '@mui/material'

const data = [
  {
    name: 'Sun',
    books: 4000,
    clothes: 1234,
    electronics: 4532,
  },
  {
    name: 'Mon',
    books: 5678,
    clothes: 1233,
    electronics: 6432,
  },
  {
    name: 'Tue',
    books: 4000,
    clothes: 4563,
    electronics: 1112,
  },
  {
    name: 'Wed',
    books: 3453,
    clothes: 1234,
    electronics: 1233,
  },
  {
    name: 'Thur',
    books: 9864,
    clothes: 3445,
    electronics: 2400,
  },
  {
    name: 'Fri',
    books: 4567,
    clothes: 2400,
    electronics: 2243,
  },
  {
    name: 'Sat',
    books: 3562,
    clothes: 2400,
    electronics: 1673,
  },
];



const Single = () => {
  return (
    <div className='single'>
        <div className="view">
<div className="info">
    <div className="top-info">
        <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <h1>John Doe</h1>
        <button>Update</button>
    </div>
    <div className="details">
        <div className="item">
            <span className="item-title">Username:</span>
            <span className="item-value">John Doe</span>
        </div>
        <div className="item">
            <span className="item-title">Username:</span>
            <span className="item-value">John Doe</span>
        </div>
        <div className="item">
            <span className="item-title">Username:</span>
            <span className="item-value">John Doe</span>
        </div>
        <div className="item">
            <span className="item-title">Username:</span>
            <span className="item-value">John Doe</span>
        </div>
        <div className="item">
            <span className="item-title">Username:</span>
            <span className="item-value">John Doe</span>
        </div>
    </div>
</div>
<hr />
<div className="chart"></div>
<ResponsiveContainer width='100%' height='100%'>
  <LineChart
  width={500}
  height={300}
  data={data}
  margin={{
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  }}
  >
    <XAxis dataKey='name'/>
    <YAxis/>
    {/* <Tooltip /> */}
    <Legend/>
    <Line
    type='monotone'
    dataKey='pv'
    stroke='#8884d8'
    activeDot={{r: 8}}/>
    <Line type='monotone' dataKey={'uv'} stroke='#82ca9d'/> 
  </LineChart>
</ResponsiveContainer>

        </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        <ul>
          <li>
            <div>
                <p>John Doe purchased a Playstarion 5 digital edition</p>
                <time>3 days ago</time>
            </div>
          </li>
          <li>
            <div>
                <p>John Doe purchased a Playstarion 5 digital edition</p>
                <time>3 days ago</time>
            </div>
          </li>
          <li>
            <div>
                <p>John Doe purchased a Playstarion 5 digital edition</p>
                <time>3 days ago</time>
            </div>
          </li>
          <li>
            <div>
                <p>John Doe purchased a Playstarion 5 digital edition</p>
                <time>3 days ago</time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Single
