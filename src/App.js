import React, { useState } from 'react'
import NewBoxForm from './components/NewBoxForm'
import Boxes from './components/Boxes'

function App() {
  const [boxes, setBoxes] = useState([])
  return (
    <div>
      <NewBoxForm onSubmit={addNewBox} />
      <Boxes boxes={boxes} onBoxClick={removeBox} />
    </div>
  )

  function addNewBox(title) {
    setBoxes([...boxes, title])
  }

  function removeBox(title) {
    const index = boxes.findIndex((box) => box === title)
    setBoxes([...boxes.slice(0, index), ...boxes.slice(index + 1)])
  }
}

export default App
