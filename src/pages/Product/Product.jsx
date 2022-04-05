import { Badges } from '../../components/InfoBox/Badges/Badges'
import HotSale from '../../components/InfoBox/HotSale/HotSale'
import ProductImage from '../../components/ProductImage/ProductImage'
import UseFetch from '../../components/UseFetch/UseFetch'
import './product.scss'

export const Product = () => {
  const {data, isPending, error} = UseFetch('https://fe-assignment.vaimo.net');

  

  return (
    <div className='product'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='isPending'>Loading...</div>}
      <div>
        <h1>{data?.product.options["1080p"].label}</h1>
      </div>
      <Badges />
      <HotSale />
    </div>
  )
}
