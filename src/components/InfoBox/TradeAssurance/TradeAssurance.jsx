import React from 'react'
import './tradeAssurance.scss'
import icon from '../../../assets/icons/icons8-security_lock.svg'

const TradeAssurance = () => {
  return (
    <div className='tradeAssurance'>
        <img src={icon} alt="" />
        <span className="textBold">Trade Assurance<span className='text'> protects your Alibaba.com orders</span></span>
    </div>
  )
}

export default TradeAssurance