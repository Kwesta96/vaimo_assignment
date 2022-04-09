import { Add, Remove } from '@mui/icons-material';
import React, { useState } from 'react'
import './qtyRocker.scss'

const QtyRocker = () => {

    let min = 0;
    let max = 1000;
    let step = 1;

    const [quantity, setQuantity] = useState(min + 1);
    const [decreaseBtn, setDecreaseBtn] = useState('inc');

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > min && setQuantity(quantity - step);
            if (quantity === (min + 1)) {
                setDecreaseBtn('dec');
            }
        } else {
            setQuantity(quantity + step);
            setDecreaseBtn('inc');
        };
    }

    return (
        <div className='qtyRocker'>
            <button className={decreaseBtn} onClick={() => handleQuantity('dec')} ><Remove /></button>
            <input type="number" id="qty" name="qty" value={quantity} />
            <button className='inc' onClick={() => handleQuantity('inc')} ><Add /></button>
        </div>
    )
}

export default QtyRocker