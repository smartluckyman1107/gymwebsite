import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <div className="contianer notfound__container">
      <h2>Page Not Found</h2>
      <Link to="/" className='btn' >Go Back Home</Link>
    </div>
  )
}

export default NotFound