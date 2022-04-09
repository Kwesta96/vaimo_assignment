import { Add, Remove } from '@mui/icons-material';
import React, { useState } from 'react'
import './qtyRocker.scss'

const QtyRocker = ({ min, max, step }) => {

    const [quantity, setQuantity] = useState(min + step);
    const [decButton, setDecButton] = useState('enable');
    const [incButton, setIncButton] = useState('enable');

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > min && setQuantity(quantity - step);
            if (quantity === (min + step)) {
                setDecButton('disable');
            }
        } else {
            setDecButton('enable');
        };
        if (type === "inc") {
            quantity < max && setQuantity(quantity + step);
            if (quantity === (max - step)) {
                setIncButton('disable');
            }
        } else {
            setIncButton('enable');
        };
    };

    const getValue = (event) => {
        const quantity = parseInt(event.target.value);
        if(quantity <= min){
            setQuantity(min);
            setDecButton('disable');
            setIncButton('enable');
        }else if(quantity >= max){
            setQuantity(max);
            setDecButton('enable');
            setIncButton('disable');
        }
        else if(quantity > min && quantity < max){
            setQuantity(quantity);
            setDecButton('enable');
            setIncButton('enable');
        }
    };

    return (
        <div className='qtyRocker'>
            <button className={decButton} onClick={() => handleQuantity('dec')} ><Remove /></button>
            <input type="number" id="qty" name="qty" value={quantity} onChange={getValue} min={min} max={max} />
            <button className={incButton} onClick={() => handleQuantity('inc')} ><Add /></button>
        </div>
    )
}

export default QtyRocker