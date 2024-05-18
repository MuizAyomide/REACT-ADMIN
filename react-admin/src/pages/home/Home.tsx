import Chartbox from '../../Components/Chatbox/Chartbox'
import TopBox from '../../Components/TopBox/TopBox'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2">
        <Chartbox/>
      </div>
      <div className="box box3">
      <Chartbox/>
      </div>
      <div className="box box4">      
        <Chartbox/>
</div>
      <div className="box box5">  
      <Chartbox/>    
</div>
      <div className="box box6">box6</div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">box9</div>
    </div>
  )
}

export default Home
