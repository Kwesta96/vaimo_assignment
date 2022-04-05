import React from 'react'
import './readyToShip.scss';

export const ReadyToShip = ({ text }) => {
  return (
    <div className='readyToShip'>
      <span>{text}</span>
    </div>
  )
}
