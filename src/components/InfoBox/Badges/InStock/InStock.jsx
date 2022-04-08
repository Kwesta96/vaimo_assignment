import { CheckCircleOutline } from '@mui/icons-material'
import './inStock.scss'

export const InStock = ({ text }) => {
  return (
    <div className='inStock'>
      <span><CheckCircleOutline className='icon'/>{text}</span>
    </div>
  )
}
