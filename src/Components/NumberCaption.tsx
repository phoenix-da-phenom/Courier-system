import React from 'react'
import type { numberHeaderProps } from '../Lib/data'

export default function NumberCaption({desc, num}: numberHeaderProps) {
  return (
    <div className='my-container'>
      <h2 className=' text-5xl font-semibold text-gray-300'>{num}</h2>
      <h1 className='font-bold text-4xl'>{desc}</h1>


    </div>
  )
}
