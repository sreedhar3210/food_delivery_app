import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <div> <Navbar/> </div>
      <div>
        <div className="card mt-3" style={{"width": "18rem", "maxHeight": "360px"}}>
          <img className="card-img-top" src="..." alt="image-cap"/>
          {/* alt is used if image is failed to load --*/}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Checking if card is working.</p>
            <div className="container w-100">
              <select className='m-2 h-100 w-100 bg-success'></select>
            </div>
          </div>
        </div>
      </div>
      <div> <Footer/> </div>
    </div>
  )
}
