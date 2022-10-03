import { useState, useEffect } from 'react';




const MainText = ({stringArray, wpm,done, setDone}) => {

  useEffect(() => {
    const doneSvg = document.querySelectorAll(".chackmark-svg-wrapper")

    if(done){ 
      doneSvg.forEach(a=>a.style.display = "block");
    }else{
      doneSvg.forEach(a=>a.style.display = "hidden");
    }
  }, [done])

  



  let [index, setIndex] = useState(0)

  const calcInterval = (wpm) => {
    if (wpm === 0){
      console.log("Error: Cannot calculate 0 WPM")
    }
    return 1000/(wpm/60)
  }

  
  useEffect(() => {
    console.log(`Rerendering`)
    const interval = setInterval(() => {
      if(index < stringArray.length){
        setIndex(index++)
      }else{

        if(done === false){
          setDone(!done)
        }
        // TODO: This useEffect is also in an ininite loop. Need to fix this too.
        console.log(`Printing Text done: ${done}`)
         clearInterval(interval);
      }
      
    }, calcInterval(wpm));
  
    return (() => clearInterval(interval));
  }, [done, index, setDone, stringArray, wpm]);
  // TODO: console.log() is rendered twice. Might be a problem within useEffect
  console.log(index, stringArray[index])

  return (
    <div className='reader-child disable-select'>{stringArray[index]}</div>
  )
}

export default MainText