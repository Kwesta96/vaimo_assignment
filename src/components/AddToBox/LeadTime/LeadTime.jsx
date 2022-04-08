import { InfoOutlined } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import React from 'react'
import './leadTime.scss'

const LeadTime = ({ leadTime }) => {

  const split = leadTime.value.split(" ");

  return (
    <div className='leadTime'>
      <span className="leadText">Lead Time <b>{split[0]}</b> {split[1]}</span>
      <Tooltip title={leadTime.info + " " + leadTime.value}>
        <InfoOutlined className='icon' />
      </Tooltip>

    </div>
  )
}

export default LeadTime