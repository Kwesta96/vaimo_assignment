import QtyRocker from '../QtyRocker/QtyRocker'
import './products.scss'

const Products = ({ options }) => {
  return (
    <div className='products'>
      <div className="row">
        <span className='optionText'>Options:</span>
        <span className="optionName">{options["1080p"].label}</span>
        <span className="price">{options["1080p"].price.currency.symbol} {options["1080p"].price.value.toFixed(2)}</span>
        <QtyRocker />
      </div>
      <div className="row">
        <span className='optionText'></span>
        <span className="optionName">{options["4k"].label}</span>
        <span className="price">{options["4k"].price.currency.symbol} {options["4k"].price.value.toFixed(2)}</span>
        <QtyRocker />
      </div>
      <div className="row">
        <div className='optionText'></div>
        <div className="optionName">{options.battery_accessories.label}</div>
        <div className="price" id='price'>{options.battery_accessories.price.currency.symbol} {options.battery_accessories.price.value.toFixed(2)}</div>
        <QtyRocker/>
      </div>

      {/* <table>
          <tr className='row'>
            <td className='column1'>Options:</td>
            <td className='option'>{options["1080p"].label}</td>
            <td className='price'>{options["1080p"].price.currency.symbol} {options["1080p"].price.value.toFixed(2)}</td>
            <td className='quantity'><QtyRocker/></td>
          </tr>
          <tr className='row'>
            <td className='column1'></td>
            <td className='option'>{options["4k"].label}</td>
            <td className='price'>{options["4k"].price.currency.symbol} {options["4k"].price.value.toFixed(2)}</td>
            <td className='quantity'><QtyRocker/></td>
          </tr>
          <tr className='row'>
            <td className='column1'></td>
            <td className='option'>{options.battery_accessories.label}</td>
            <td className='price'>{options.battery_accessories.price.currency.symbol} {options.battery_accessories.price.value.toFixed(2)}</td>
            <td className='quantity'><QtyRocker/></td>
          </tr>
      </table> */}
    </div>
  )
}

export default Products