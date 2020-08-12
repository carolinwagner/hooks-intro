import React, { useState } from 'react'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <Counter initialValue={42} />
    </div>
  )
}

export default App
