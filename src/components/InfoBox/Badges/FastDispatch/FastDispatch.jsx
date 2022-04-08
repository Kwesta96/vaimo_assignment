import { CheckCircleOutline } from '@mui/icons-material'
import React from 'react'
import './fastDispatch.scss'

export const FastDispatch = ({ text }) => {
  return (
    <div className='fastDispatch'>
      <span><CheckCircleOutline className='icon'/>{text}</span>
    </div>
  )
}
