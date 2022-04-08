import { Rating } from '@mui/material'
import './ratings.scss'

const Ratings = ({rating}) => {
  return (
    <div className='ratings'>
      <Rating name="read-only" value={parseFloat(rating.rating)} precision={0.1} readOnly className='stars'/>
    </div>
  )
}

export default Ratings