import React, { useState } from 'react'

import CounterValue from './CounterValue'
import Button from './Button'

export default function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue)
  return (
    <>
      <CounterValue value={count} />
      <Button onClick={countUp} title="Count Up" />
    </>
  )

  function countUp() {
    setCount(count + 1)
  }
}
