import './productImage.scss'

const ProductImage = ({ img }) => {

    return (
        <div className='productImage'>    
            <img src={img.main} alt="" className='image'/>
        </div>
    )
}

export default ProductImage