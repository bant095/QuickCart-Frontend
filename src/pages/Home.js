import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* first section */}
      <section className='home-wrapper-1 py-5'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative p-3'>
              <img
                src='images/main-banner-1.jpg'
                className='img-fluid rounded-3'
                alt='main-banner'
              />
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad $13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justiify-content-between align-items-center '>
              {/* small container */}
              {/* 1 */}
              <div className='small-banner position-relative p-3'>
                <img
                  src='images/catbanner-01.jpg'
                  className='img-fluid rounded-3'
                  alt='main-banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALES</h4>
                  <h5>Laptop $13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className='small-banner position-relative p-3'>
                <img
                  src='images/catbanner-02.jpg'
                  className='img-fluid rounded-3'
                  alt='main-banner'
                />

                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className='small-banner position-relative p-3'>
                <img
                  src='images/catbanner-03.jpg'
                  className='img-fluid rounded-3'
                  alt='main-banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>iPad $13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div className='small-banner position-relative p-3'>
                <img
                  src='images/catbanner-04.jpg'
                  className='img-fluid rounded-3'
                  alt='main-banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVAL</h4>
                  <h5>iPad $13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* seconds section [SERVICE UNIQUENESS] */}
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15 justify-content-center'>
                  <img src='images/service.png' alt='' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $5</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15 justify-content-center'>
                  <img src='images/service-02.png' alt='' />
                  <div>
                    <h6>Daily Suprise Offers</h6>
                    <p className='mb-0'>Save upto 25% off</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15 justify-content-center'>
                  <img src='images/service-03.png' alt='' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15 justify-content-center'>
                  <img src='images/service-04.png' alt='' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get factory Default Price</p>
                  </div>
                </div>

                <div className='d-flex align-items-center gap-15 justify-content-center'>
                  <img src='images/service-05.png' alt='' />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
