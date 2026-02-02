import React from 'react'
import Canvas from './Components/Canvas'
function App() {
  return (
    <div className='min-h-screen bg-black text-white w-full'>
      <Canvas startPoint={0}/>
      <Canvas startPoint={150}/>
      <Canvas startPoint={300}/>
    </div>
  )
}

export default App