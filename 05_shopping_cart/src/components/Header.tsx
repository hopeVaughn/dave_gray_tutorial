import { HeaderProps } from '../types'

const Header = ({ viewCart, setViewCart }: HeaderProps) => {

  const content = (
    <header className='header'>
      <div className="header_title-bar">
        <h1>Acme Co.</h1>
        <div className="header__price-box">
          <p>Total Items:</p>
          <p>Total Price:</p>
        </div>
      </div>
    </header>
  )
  return (
    <div>Header</div>
  )
}

export default Header