import { InfoOutlined } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import React from 'react'
import './shippingTime.scss'

const ShippingTime = ({ shippingTime }) => {

  const split = shippingTime.value.split(" ");

  return (
    <div className='shippingTime'>
      <span className="shippingText">Shipping Time <b>{split[0]}</b> {split[1]}</span>
      <Tooltip title={shippingTime.info}>
        <InfoOutlined className='icon' />
      </Tooltip>
    </div>
  )
}

export default ShippingTime