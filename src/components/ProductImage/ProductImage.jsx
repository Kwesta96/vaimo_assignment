import React from 'react'
import './productImage.scss'

const ProductImage = ({ img }) => {

    return (
        <div className='productImage'>    
            <img src={img.main} alt="s" className='img'/>
        </div>
    )
}

export default ProductImage