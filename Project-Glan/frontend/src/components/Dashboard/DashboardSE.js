import "../Dashboard/Dashboard.css"

function DashboardSE(props) {
    return (
      <div className='dashContent'>
        <div className='dash'>{props.topic}</div>
      <div className='boxes'>
  
          <div className='box1'>
              <topic className="topic">{props.word1}</topic>
              <br/>
              <topic2 className="topic2">{props.num1}</topic2>
          </div>
  
          <div className='box2'>
              <topic className="topic">{props.word2}</topic>
              <br/>
              <topic2 className="topic2">{props.num2}</topic2>
          </div>
  
          <div className='box3'>
              <topic className="topic">{props.word3}</topic>
              <br/>
              <topic2 className="topic2">{props.num3}</topic2>
          </div>
  
      </div>
      <div className='charts'>
          <div className='chart1'>{props.cha1}</div>
          {/* <div className='chart2'>{props.cha2}</div> */}
      </div>
      <div className='view1'>
          {props.view}
      </div>
      </div>
    )
  }
  
  export default DashboardSE