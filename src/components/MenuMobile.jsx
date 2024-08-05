import React from 'react'

const MenuMobile = ({ showMenu }) => {
  return (
    <div className={showMenu ? 'menu_m' : 'hide'}>
      <ul>
        <li>PRODUCT</li>
        <li>FEATURES</li>
        <li>PRICING</li>
        <li className='li_line'><div className='line' /></li>
        <li className='login_m'>LOGIN</li>
      </ul>
    </div>
  )
}

export default MenuMobile
