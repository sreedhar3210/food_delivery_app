import React from 'react';

export default function CarouselPage() {

  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://source.unsplash.com/random/900x700/?biryani" className="d-block w-100"  alt="First Slide" />
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/random/900x700/?poori" className="d-block w-100"  alt="second slide" />
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100"  alt="third slide" />
            </div>
            {/* z-index is 1 because other wise this search bar the images displayed get collapsed*/}
            <div className='carousel-caption' style={{ zIndex: 1 }}>
                <form className="form-inline">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                </form>
            </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
