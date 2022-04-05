import React from 'react'
import './inStock.scss'

export const InStock = ({ text }) => {
  return (
    <div className='inStock'>
      <span>{text}</span>
    </div>
  )
}
