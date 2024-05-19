import React from 'react'
import './PieChartBox.scss'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const data = [

    { name: 'Mobile', value: 400, color: '#0088fe'},
    { name: 'Desktop', value: 500, color: '#00c49f'},
    { name: 'Laptop', value: 300, color: '#ffbb28'},
    { name: 'Tablet', value: 200, color: '#ff0000'},
]


const PieChartBox = () => {
  return (
    <div className='piechartbox'>
      <h1>Leads by Source</h1>
      <div className="chart">
            <ResponsiveContainer width="99%" height={300}>
            <PieChart >
                <Tooltip
                
                contentStyle={{background: 'white', borderRadius:'5px'}}/>

            <Pie
            data={data}
            innerRadius={'70%'}
            outerRadius={'90%'}
            paddingAngle={5}
            dataKey="value"
            >
            {data.map((item, index) => (
                <Cell key={item.name} fill={item.color} />
            ))}
            </Pie>
             </PieChart>
            </ResponsiveContainer>
      </div>

      <div className="options">
            {
                data.map((item)=>(
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{background:item.color}}></div>
                                <span>{item.name}</span>
                            
                        </div>
                            <span>{item.value}</span>
                    </div>
                ))
            }
      </div>
    </div>
  )
}

export default PieChartBox
