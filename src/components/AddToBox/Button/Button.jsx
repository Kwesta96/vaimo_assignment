import { MailOutlined } from '@mui/icons-material'
import './button.scss'

const Button = ({className, label}) => {
  return (
    <div className='button'>
        <button className={className}><MailOutlined className='icon'/>{label}</button>
    </div>
  )
}

export default Button