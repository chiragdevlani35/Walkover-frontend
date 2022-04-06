import React from 'react'
import './Style.css'

export const Intro = () => {
  return (
    <div className='container text-center my-2'>
        <h2 style={{color:"azure",fontFamily:"fantasy",margin:"10px"}}>GROUP 1</h2>
        <div class="d-flex justify-content-between" style={{color:"blanchedalmond", fontSize:"20px", fontFamily:"monospace", marginTop:"10px"}}><span>Chirag Devlani</span><span>6th Semester, Medicaps University,Indore</span></div>
        <div class="d-flex justify-content-between" style={{color:"blanchedalmond", fontSize:"20px", fontFamily:"monospace", marginTop:"10px"}}><span>Arpandeep Kaur Saluja</span><span>6th Semester, PIMR,Indore</span></div>
        <hr style={{color:"blanchedalmond",marginTop:"20px"}}/>
    </div>
  )
}
