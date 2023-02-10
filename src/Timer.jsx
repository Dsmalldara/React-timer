import React, { useState, useRef} from 'react'

function Timer(){
  const [randomInput, setRandomInput] = useState("")
  const [seconds, setSeconds] = useState(0)
  const renders = useRef(0)
  const timerId = useRef();
  const handleChange =(e)=>{
setRandomInput(e.target.value);
renders.current++;
  }
 const startTimer= ()=>{
timerId.current = setInterval(()=>{  
  renders.current++;  
  setSeconds(prev => prev+ 1 )
},1000)
 }
 const  stopTimer =()=>{
clearInterval(timerId.current)
timerId.current = 0;
 }
 const resetTimer = ()=>{
  stopTimer();
  if (seconds){
    renders.current++;
    setSeconds(0);
  }
 }
  return (
  <div classname="xtn">
    <main id='input'>
       <input type = "text"
           placeholder=' random input'
          value = {randomInput}
          onChange = {handleChange}/>
     <br/> <br/>
      <p>Renders: {renders.current}</p>
      <br></br>
      <section>
      <button className='btn' onClick={startTimer}>Start</button>
      <button className='btn' onClick={stopTimer}>Stop</button>
      <button className='btn' onClick={resetTimer}>Reset</button>
      </section>
      <br></br>
      <p>seconds:{seconds}</p>
      <p>{randomInput}</p>
       
    </main>
  </div>
  )
}

export default Timer;