import React, { useState, useEffect } from 'react'
import Countdown from './components/Countdown'

function App() {
  const [showCountdown, setShowCountdown] = useState(true)

  useEffect(() => {
    console.log('updating App')
  })

  useEffect(() => {
    console.log('first render of App')
  }, [])

  useEffect(() => {
    console.log('updating showCountdown', showCountdown)
  }, [showCountdown])

  return (
    <div>
      <button onClick={toggleCountdown}>Toggle countdown</button>
      {showCountdown ? (
        <Countdown from="5" onTimeUp={toggleCountdown} />
      ) : (
        <p>Time is up</p>
      )}
    </div>
  )

  function toggleCountdown() {
    setShowCountdown(!showCountdown)
  }
}

export default App
