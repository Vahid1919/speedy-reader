import React from 'react'
import Slider from "./Slider"

const Controls = ({wpm, setWpm}) => {
  return (
    <div className='controls-flex'>
        <Slider wpm={wpm} setWpm={setWpm}></Slider>
    </div>
  )
}

export default Controls