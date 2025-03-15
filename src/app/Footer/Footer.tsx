import React from 'react'
import News from './News'
import Connection from './Connection'

const Footer = () => {
  return (
    <div className='foot px-4 py-12 md:py-32 lg:py-32 lg:grid lg:grid-cols-2 lg:grid-rows-1'>
      <News className='col-start-2 lg:py-16 xl:pt-52'/>
      <Connection className='row-start-1 lg:py-16 xl:pt-52' />
    </div>
  )
}

export default Footer
