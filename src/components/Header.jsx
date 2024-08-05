import { useState } from 'react'
import logo from '../images/logo.svg'
import burguer from '../images/icon-hamburger.svg'
import MenuMobile from './MenuMobile'
import closeIcon from '../images/icon-close.svg'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(true)
  }
  const handleHideMenu = () => {
    setShowMenu(false)
  }

  return (
    <div className='header_container'>
      <div className='left'>
        <img src={logo} alt='logo' />
      </div>
      <div className='right'>
        <ul>
          <li>PRODUCT</li>
          <li>FEATURES</li>
          <li>PRICING</li>
          <li className='li_dot'><div className='dot' /></li>
          <li className='login'>LOGIN</li>
        </ul>
      </div>
      <div className={showMenu ? 'hide' : 'burguer_container'}>
        <img
          src={burguer}
          alt='burguer'
          onClick={handleShowMenu}
        />
      </div>
      <div className={showMenu ? 'close_container' : 'hide'}>
        <img
          src={closeIcon}
          alt='close icon'
          onClick={handleHideMenu}
        />
      </div>
      <MenuMobile
        showMenu={showMenu}
      />
    </div>
  )
}

export default Header
