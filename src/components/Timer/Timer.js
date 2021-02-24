import React from 'react'
import './Timer.scss'

export default function Timer({time}) {
  return (
    <span className="timer">
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </span>
  )
};
