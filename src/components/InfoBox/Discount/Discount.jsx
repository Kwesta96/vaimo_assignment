import { AccessTime } from '@mui/icons-material'
import './discount.scss'
import moment from 'moment'

const Discount = ({ discount }) => {

    return (
      <div className='discount'>
        <span className='discountAmt'>{discount.amount} OFF</span>&nbsp;
        <span className='discountText'>Discount ends in</span>
        <AccessTime className='icon' />
        <span className='countdownTimer'>{moment(discount.end_date).calendar()}</span>
      </div>
    )
  }
export default Discount