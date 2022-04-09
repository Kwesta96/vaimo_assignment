import { CircularProgress } from '@mui/material'
import AddToBox from '../../components/AddToBox/AddToBox'
import { Badges } from '../../components/InfoBox/Badges/Badges'
import Discount from '../../components/InfoBox/Discount/Discount'
import HotSale from '../../components/InfoBox/HotSale/HotSale'
import Links from '../../components/InfoBox/Links/Links'
import MarchExpo from '../../components/InfoBox/MarchExpo/MarchExpo'
import Payments from '../../components/InfoBox/Payments/Payments'
import PriceBox from '../../components/InfoBox/PriceBox/PriceBox'
import Products from '../../components/InfoBox/Products/Products'
import Ratings from '../../components/InfoBox/Ratings/Ratings'
import TradeAssurance from '../../components/InfoBox/TradeAssurance/TradeAssurance'
import ProductImage from '../../components/ProductImage/ProductImage'
import useFetch from '../../hooks/useFetch'
import './product.scss'

export const Product = () => {
  const { data: prod, isPending, error } = useFetch('https://fe-assignment.vaimo.net');

  if (isPending) return <h6 className='isPending'><CircularProgress color="inherit" /></h6>
  if (error) return <h2 className='error'>{error}</h2>

  return (
    <div className='product'>
      <ProductImage img={prod?.product.gallery[0]} />
      <div className="infoBox">
        <Badges />
        <HotSale title={prod?.product.name} tag={prod?.product.tags} />
        <Ratings rating={prod?.product.reviews}/>
        <PriceBox price={prod?.product.options} />
        <MarchExpo />
        <Discount discount={prod?.product.discount} />
        <Products options={prod?.product.options}/>
        <TradeAssurance />
        <Payments />
        <div className="links">
          <Links link="Alibaba.com Logistics" />
          <Links link="Inspection Solutions" />
        </div>
      </div>
      <AddToBox shipping={prod?.product.shipping} />
    </div>
  )
}
