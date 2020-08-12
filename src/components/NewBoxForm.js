import React from 'react'

export default function NewBoxForm({ onSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input name="newBox" type="text" />
      <button type="submit">Add box</button>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const title = event.target.newBox.value
    onSubmit(title)
  }
}
