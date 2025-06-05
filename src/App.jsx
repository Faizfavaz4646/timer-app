import React, { useRef, useState } from 'react'

function App() {
  const[time,setTime]=useState(0);
  const [isRunning,SetIsRunning]=useState(false);
  const timerRef=useRef(null);
  
  const timeFormate=()=>{
   const hours=String(Math.floor(time / 3600)).padStart(2,'0');
   const minutes=String(Math.floor((time / 3600)/60)).padStart(2,'0');
   const seconds=String(time % 60).padStart(2,'0')
   return `${hours}:${minutes}:${seconds}`
  }
const startTimer=()=>{
  if(!isRunning){
    timerRef.current=setInterval(() => {
      setTime(prev=> prev + 1)
      
    },1000);
    SetIsRunning(true)
  }
}
const stopTimer=()=>{
  clearInterval(timerRef.current)
  SetIsRunning(false)
}
const resetTimer=()=>{
  clearInterval(timerRef.current)
  setTime(0)
  SetIsRunning(false)
}

  return (
    <div className='min-h-screen bg-gray-500 flex justify-center items-center '>
      <div className='bg-white p-12 rounded-full text center w-70 h-70 '>
        <h1 className='text-3xl font-bold text-center'>⏰Timer App</h1>
        <hr class="border-t-2 border-gray-300 my-4" />
        <div className='text-center font-mono text-4xl '>{timeFormate()}</div>
        <div className='flex justify-center gap-4'>
          {!isRunning ? (

         <button onClick={startTimer} className='bg-green-500 px-4 py-2 rounded cursor-pointer'>{time === 0 ? 'Start':'Resume'}</button>

          ):(
          <button onClick={stopTimer} className='bg-yellow-500 px-4 py-2 rounded cursor-pointer'>Stop</button>


          )}
          <button onClick={resetTimer} className='bg-red-500 px-4 py-2 rounded cursor-pointer'>Reset</button>
        </div>
      </div>

    </div>
  )
}

export default App;