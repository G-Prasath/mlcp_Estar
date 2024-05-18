import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Officeimg = () => {
  return (
    <div className='sec-padding w-full bg-light_white'>
      <div className='w-full h-[518px] max-lg:h-auto overflow-hidden'>
        <div className='w-[90%] max-lg:w-full max-lg:ml-0 flex justify-center ml-[5%] overflow-hidden'>
        <LazyLoadImage src="/office-worker-img.jpg" alt="Office - workers" className='w-full aspect-video rounded-lg hover:scale-110 duration-300' />
        </div>
      </div>
      <div className="flex items-center gap-5 mt-5 max-md:flex-col">
        <div className='overflow-hidden rounded-lg'>
          <LazyLoadImage src="/office-worker-img.jpg" alt="Office - workers" className='w-full aspect-video rounded-lg hover:scale-110 duration-300' />
        </div>
        <div className='overflow-hidden rounded-lg'>
          <LazyLoadImage src="/office-worker-img.jpg" alt="Office - workers" className='w-full aspect-video rounded-lg hover:scale-110 duration-300' />
        </div>
      </div>
      
      
    </div>
  )
}

export default Officeimg
