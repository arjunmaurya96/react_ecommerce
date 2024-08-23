import React from 'react'
import hero from '../Components/Assets/heroimg.jpg'

const Hero2 = () => {
  return (
   <>
   <div className='container'>
    <div className="row">
        <img src={hero} alt="" style={{height:"100%",width:"100%"}} />
    </div>

   </div>
   </>
  )
}

export default Hero2