import './payments.scss'
import imgVisa from '../../../assets/icons/icons8-visa.svg'
import imgMasterCard from '../../../assets/icons/icons8-mastercard.svg'
import imgApplePay from '../../../assets/icons/icons8-apple_pay.svg'

const Payments = () => {
  return (
    <div className='payments'>
        <p>Payments:</p>
        <img src={imgVisa} alt="visa" className='visa'/>
        <img src={imgMasterCard} alt="mastercard" className='mastercard'/>
        <img src={imgApplePay} alt="apple-pay" className='apple-pay'/>
    </div>
  )
}

export default Payments