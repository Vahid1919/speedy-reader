import styles from "../styles/Slider.module.css"

const Slider = ({wpm, setWpm}) => {

 


  return (
    <div className={styles.sliderContainer}>
    <input className={styles.rangeInput} type="range" id="wpm" name="volume"
           min="0" max="700" step={50} defaultValue='200' onChange={(e) => {setWpm(e.target.value)}}/>
    <span className={styles.sliderTextContainer}>
      <label id="wpm-text" className={`${styles.sliderText} disable-select`} htmlFor="wpm">{wpm}</label>
      <div className={`${styles.wpm} disable-select`}>WPM</div>
    </span>
   
  </div>
  )
}

export default Slider