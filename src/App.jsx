import React from 'react'
import data from '../src/utils/data.js'
import Canvas from './Components/Canvas'
function App() {
  return (
    <div className='min-h-screen bg-black text-white w-full'>
      {data.map((item, index) => {
        <div key={index}>
          {item.map((canvasdets, index) => {
            <Canvas details={canvasdets} />
          })}
        </div>
      })}
      <h1>Rajdaj</h1>
    </div>
  )
}

export default App