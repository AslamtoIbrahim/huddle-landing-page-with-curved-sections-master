import React from 'react'
import Logo from './Logo'
import FreeButton from './FreeButton'

const Header = () => {
  return (
    <div className='bg-very-pale-cyan flex items-center justify-between py-8 px-4
    md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-20 xl:py-14'>
      <Logo />
      <FreeButton />
    </div>
  )
}

export default Header
