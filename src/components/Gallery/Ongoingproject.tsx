import React from 'react'

const Ongoingproject = () => {
  return (
    <div className='sec-padding w-full bg-light_white max-sm:mt-[50px]'>
      <h6 className='text-center font-[700] text-3xl uppercase'>On Going Projects</h6>

      <div className='w-full h-auto mt-10 flex items-center justify-center p-5 overflow-hidden max-sm:p-0'>
        <div className='flex max-sm:flex-col'>
          <img src="/img2.jpg" alt="slide banner" className='border border-white shadow-imgShadow max-sm:h-auto h-[450px] w-[450px] aspect-square max-lg:w-full' />
          <img src="/img3.jpg" alt="slide banner" className='border border-white max-sm:h-auto max-sm:mt-[-220px] max-sm:ml-0 shadow-imgShadow max-md:ml-[-450px] h-[450px] ml-[-400px] mt-[50px] w-[450px] aspect-square max-md:w-full' />
          <img src="/img1.jpg" alt="slide banner" className='border border-white max-sm:h-auto max-sm:mt-[-220px] max-sm:ml-0 shadow-imgShadow max-md:ml-[-450px] h-[450px] ml-[-400px] mt-[100px] w-[450px] aspect-square max-md:w-full' />
          <img src="/img2.jpg" alt="slide banner" className='border border-white max-sm:h-auto max-sm:mt-[-220px] max-sm:ml-0 shadow-imgShadow max-md:ml-[-450px] h-[450px] ml-[-400px] mt-[150px] w-[450px] aspect-square max-md:w-full' />

        </div>
      </div>
    </div>
  )
}

export default Ongoingproject
