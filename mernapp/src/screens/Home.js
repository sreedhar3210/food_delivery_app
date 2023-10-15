import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import CarouselPage from '../components/CarouselPage'

export default function Home() {
  return (
    <div>
      <div> <Navbar /> </div>
      <div><CarouselPage/></div>
      <div className='m-3'> <Card /> </div>
      <div> <Footer /> </div>
    </div>
  )
}
