import './addToBox.scss'
import LeadTime from './LeadTime/LeadTime'
import Button from './Button/Button'
import ShippingTime from './ShippingTime/ShippingTime'

const AddToBox = ({ shipping }) => {
    return (
        <div className='addToBox'>
            <div className="wrapper">
                <div className='text'>
                    <span className="shipTo">Ship to <span className='textUnderline'>{shipping.method.country} <br /> by {shipping.method.title}</span></span>
                    <span className='shipCost'>{shipping.method.cost.currency.symbol} {shipping.method.cost.value.toFixed(2)}</span>
                </div>
                <LeadTime leadTime={shipping.lead_time} />
                <ShippingTime shippingTime={shipping.method.shipping_time} />
                <Button className="login" label="Login to Purchase" />
                <Button className="contactSupplier" label="Contact the Supplier" />
            </div>
        </div>
    )
}

export default AddToBox