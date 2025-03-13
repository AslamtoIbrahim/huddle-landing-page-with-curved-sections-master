import React from 'react'
import Preview from './Preview'
import {stats} from './data'

const Statics = () => {
  return (
    <div className='flex flex-col items-center gap-16 py-6'>
      <Preview privs={stats[0]} />
      <Preview privs={stats[1]} />
    </div>
  )
}

export default Statics
