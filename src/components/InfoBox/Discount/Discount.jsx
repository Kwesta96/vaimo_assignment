import { AccessTime } from '@mui/icons-material'
import './discount.scss'

const Discount = ({ discount }) => {

    return (
      <div className='discount'>
        <span className='discountAmt'>{discount.amount} OFF</span>&nbsp;
        <span className='discountText'>Discount ends in</span>
        <AccessTime className='icon' />
        <span className='countdownTimer'>{discount.end_date}</span>
      </div>
    )
  }
export default Discount