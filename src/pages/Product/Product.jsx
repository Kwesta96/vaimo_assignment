import AddToBox from '../../components/AddToBox/AddToBox'
import { Badges } from '../../components/InfoBox/Badges/Badges'
import HotSale from '../../components/InfoBox/HotSale/HotSale'
import Links from '../../components/InfoBox/Links/Links'
import MarchExpo from '../../components/InfoBox/MarchExpo/MarchExpo'
import Payments from '../../components/InfoBox/Payments/Payments'
import TradeAssurance from '../../components/InfoBox/TradeAssurance/TradeAssurance'
import ProductImage from '../../components/ProductImage/ProductImage'
import UseFetch from '../../components/UseFetch/UseFetch'
import './product.scss'

export const Product = () => {
  const { data: prod, isPending, error } = UseFetch('https://fe-assignment.vaimo.net');

  if (isPending) return <h2 className='isPending'>Loading...</h2>
  if (error) return <h2 className='error'>{error}</h2>

  return (
    <div className='product'>
      <div className="left">
        <ProductImage img={prod?.product.gallery[0]} />
      </div>
      <div className="center">
        <Badges />
        <div className='title'>
          <span className='productTitle'>{prod?.product.name}</span>
          <span><HotSale tag={prod?.product.tags} /></span>
        </div>
        <MarchExpo />
        <ProductImage img={prod?.product.gallery[0]} />
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
