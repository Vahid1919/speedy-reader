import MainText from "./MainText"
import Checkmark from "./Checkmark"
import { useState} from "react"

const Main = ({stringArray, wpm}) => {

  const [done, setDone] = useState(false)

  
   


  return ( 
    <div className="main-flex">
        <MainText stringArray={stringArray} wpm={wpm} done={done} setDone={setDone}></MainText>
        <div className="checkmark-svg"><Checkmark></Checkmark></div>
    </div>
  )
}

export default Main