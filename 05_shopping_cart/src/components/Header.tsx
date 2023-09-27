import { ComponentGenericPropsType } from '../types'
import Nav from './Nav'

const Header = ({ viewCart, setViewCart }: ComponentGenericPropsType) => {

  const content = (
    <header className='header'>
      <div className="header_title-bar">
        <h1>Acme Co.</h1>
        <div className="header__price-box">
          <p>Total Items:</p>
          <p>Total Price:</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  )
  return (
    content
  )
}

export default Header