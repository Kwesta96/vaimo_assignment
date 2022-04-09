import './marchExpo.scss'
import logo from '../../../assets/images/logo.png'
import { ArrowForwardIos } from '@mui/icons-material'

const MarchExpo = () => {
    return (
        <div className='marchExpo'>
            <img src={logo} alt="logo" className="logo" />
            <div className="text">
                <span className='textShipping'>•  Free shipping (up to $40)</span>
                <span className="textDelivery">•  On-time delivery guaranteed</span>
                <ArrowForwardIos className='icon' />
            </div>
        </div>
    )
}

export default MarchExpo