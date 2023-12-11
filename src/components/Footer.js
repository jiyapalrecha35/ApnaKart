import React from 'react'

export default function Footer(props) {
  return (
    <div className='row  fixed-bottom'>
        <button className='btn btn-danger col-3' onClick={()=>props.Reset()}>RESET</button>
        <div className='col-6 bg-dark text-white text-center'>
            {props.totalAmount} /-
        </div>
        <button className='btn btn-primary col-3'>PAY-NOW</button>
        
    </div>
  )
}
