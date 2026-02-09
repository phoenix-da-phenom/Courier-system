import React from 'react'
import Logo1 from "../assets/logo1.jpg"
import Logo2 from "../assets/logo2.jpg"
import Logo3 from "../assets/logo3.jpg"
import Logo4 from "../assets/logo4.jpg"
import Logo5 from "../assets/logo5.jpg"
import Logo6 from "../assets/logo6.jpg"


export default function SponsorComponent() {
  return (
    <div className="marquee">
      <div className='flex items-center justify-center w-full ' >
        <img className='w-50 marquee-img' src={Logo1}/>
        <img className='w-50 marquee-img'  src={Logo2}/>
        <img className='w-50 marquee-img'  src={Logo3}/>
        <img className='w-50 marquee-img' src={Logo4}/>
        <img className='w-50 marquee-img'  src={Logo5}/>
        <img className='w-50 marquee-img' src={Logo6}/>
        

      </div>

    </div>
  )
}
