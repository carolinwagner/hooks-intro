import React, { useEffect, useState } from 'react'

export default function Countdown({ from, onTimeUp }) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount(count - 1), 1000)
    } else {
      onTimeUp()
    }
  }, [count, onTimeUp])

  useEffect(() => {
    console.log('updating Countdown')
  })

  useEffect(() => {
    console.log('first render of Countdown')
  }, [])

  useEffect(() => {
    console.log('updating count', count)
  }, [count])

  return <div>{count}</div>
}
