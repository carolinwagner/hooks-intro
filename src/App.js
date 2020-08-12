import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p>You clicked 'Count Up' {count} times</p>
      <button onClick={incrementCounter}>Count up</button>
    </div>
  )

  function incrementCounter() {
    setCount(count + 1)
  }
}

export default App
