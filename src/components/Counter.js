import React, { useState } from 'react'

import CounterValue from './CounterValue'
import Button from './Button'

export default function Counter({ currentCount, onIncrementClick }) {
  return (
    <>
      <CounterValue value={currentCount} />
      <Button onClick={onIncrementClick} title="Count Up" />
    </>
  )
}
