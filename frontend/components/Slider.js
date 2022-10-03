const Slider = ({wpm, setWpm}) => {

 


  return (
    <div className='slider-container'>
    <input type="range" id="wpm" name="volume"
           min="0" max="700" step={50} defaultValue='200' onChange={(e) => {setWpm(e.target.value)}}/>
    <span className="slider-text-container">
      <label id="wpm-text" className="slider-text disable-select" htmlFor="wpm">{wpm}</label>
      <div className="wpm disable-select">WPM</div>
    </span>
   
  </div>
  )
}

export default Slider