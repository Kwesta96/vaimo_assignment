import './priceBox.scss'

const PriceBox = ({ price }) => {
  return (
    <div className='priceBox'>
      <div className="top">
        <span className="price">{price.battery_accessories.price.currency.symbol} {price.battery_accessories.price.value.toFixed(2)} - {price["4k"].price.currency.symbol} {price["4k"].price.value.toFixed(2)}</span>
        <span className="optionText">/ Option <span>| </span></span>&nbsp;
        <span className="options">2 Options </span>&nbsp;
        <span className="minOrder">(Min.Order)</span>
      </div>
      <div className="bottom">
        <span className="oldPrice">{price.battery_accessories.old_price.currency.symbol} {price.battery_accessories.old_price.value.toFixed(2)} - {price["4k"].old_price.currency.symbol} {price["4k"].old_price.value.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default PriceBox