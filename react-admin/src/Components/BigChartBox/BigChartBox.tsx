import './BigChartBox.scss'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

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



const BigChartBox = () => {
  return (
    <div className='bigchartbox'>
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="electronics" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}

export default BigChartBox
