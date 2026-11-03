import React from 'react'
import ShopByDepartment from './ProductOne/ShopByDepartment'
import FeaturedGrid  from './ProductOne/FeaturedGrid'
import AnimationProducer from './Design/AnimationProducer'
import Animationsec from './Design/Animationsec'
import DesignOne from './Design/DesignOne'

const Main = () => {
  return (
    <div className='pt-10 md:pt-20'>
         <ShopByDepartment/>
         <FeaturedGrid />
         <AnimationProducer/>
         <Animationsec/>
         {/* <DesignOne/> */}
        
    </div>
  )
}

export default Main