import BarChartBox from '../../Components/BArChartBox/BarChartBox'
import BigChartBox from '../../Components/BigChartBox/BigChartBox'
import Chartbox from '../../Components/Chatbox/Chartbox'
import PieChartBox from '../../Components/PieChartBox/PieChartBox'
import TopBox from '../../Components/TopBox/TopBox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <Chartbox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <Chartbox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <Chartbox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <Chartbox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
<BigChartBox/>
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />

      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />

      </div>
    </div>
  )
}

export default Home
