import './hotSale.scss'

const HotSale = ({ title, tag }) => {

  return (
    <div className="hotSale">
      <span className='title'>{title} &nbsp;
        <span className='tagContainer'>
          <span className='tag'>{tag}</span>
        </span>
      </span>
    </div>

  )
}

export default HotSale