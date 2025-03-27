import React from 'react'
import './Program.css'
import Program1 from '../../assets/Program1.jpg'
import program4 from '../../assets/program4.jpg'
import Program3 from '../../assets/Program3.jpg'
import programicon1 from '../../assets/programicon1.png'
import programicon2 from '../../assets/programicon2.png'
import programicon3 from '../../assets/programicon3.png'

const Program = () => {
  return(
  <div className='programs' >
      <div className="program">
            <img src={Program1} alt=""/>
        <div className="caption">
          <img src= {programicon1} alt =""/>
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program" >
        <img src={program4} alt=""/>
        <div className="caption">
          <img src= {programicon2} alt=""/>
          <p>Masters Degree</p>
      </div>
      </div>

      <div className="program">
        <img src={Program3} alt=""/>
        <div className="caption">
          <img src={programicon3} alt=""/>
          <p> PhD Degree</p>
      </div>
      </div>
      </div>
  
  )
}

export default Program
