import { Rating } from '@mui/material'
import './ratings.scss'

const Ratings = ({rating}) => {
  return (
    <div className='ratings'>
      <Rating name="read-only" value={parseFloat(rating.rating)} precision={0.1} readOnly className='stars'/>
      <span className='ratingNumber'>{rating.rating}</span>
      <span className='reviews'>{rating.count} Reviews</span>
      <span className='buyers'>{rating.total_buyers} buyers</span>
    </div>
  )
}

export default Ratings