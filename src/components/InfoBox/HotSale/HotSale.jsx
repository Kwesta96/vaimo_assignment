import React from 'react'
import './hotSale.scss'

const HotSale = ({ tag }) => {

  return (
    <span className="hotSale">
      <span>{tag}</span>
    </span>

  )
}

export default HotSale