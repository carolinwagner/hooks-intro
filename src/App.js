import React, { useState } from 'react'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter currentCount={count} onIncrementClick={countUp} />
    </div>
  )

  function countUp() {
    setCount(count + 1)
  }
}

export default App
