import React from 'react'
import Banner from '../components/Gallery/Banner'
import Compltedproject from '../components/Gallery/Compltedproject'
import Ongoingproject from '../components/Gallery/Ongoingproject'

const Gallery = () => {
  return (
    <div>
      <Banner/>
      <Compltedproject/>
      <Ongoingproject/>
    </div>
  )
}

export default Gallery
