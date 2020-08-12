import React from 'react'
import './Boxes.css'

export default function Boxes({ boxes, onBoxClick }) {
  return (
    <div>
      {boxes.map((title, index) => (
        <div
          key={index + title}
          className="box"
          onClick={() => onBoxClick(title)}
        >
          {title}
        </div>
      ))}
    </div>
  )
}
