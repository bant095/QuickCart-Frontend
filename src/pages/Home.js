import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';

const Home = () => {
  return (
    <>
      {/* first section */}
      <Container class1='home-wrapper-1 py-5'>
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
      </Container>

      {/* seconds section [SERVICE UNIQUENESS] */}
      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              {services?.map((i, j) => {
                return (
                  <div className='d-flex align-items-center gap-15 justify-content-center'>
                    <img src={i.image} alt='' />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* home wrapper third section */}
      <Container class1='home-wrapper-2 py5'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
              {/* 1 */}
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera' />
              </div>

              {/* 2 */}
              <div className='d-flex  align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>12 Items</p>
                </div>
                <img src='images/tv.jpg' alt='camera' />
              </div>

              {/* 3 */}
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera' />
              </div>

              {/* 4 */}
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>11 Items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera' />
              </div>

              {/* 5 */}
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera' />
              </div>

              {/* 6 */}
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>12 Items</p>
                </div>
                <img src='images/tv.jpg' alt='camera' />
              </div>

              {/* 7 */}
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src='images/camera.jpg' alt='camera' />
              </div>

              {/* 8 */}
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>11 Items</p>
                </div>
                <img src='images/headphone.jpg' alt='camera' />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Feature collection section */}
      <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      {/* Famous Wrapper */}
      <Container class1='famous-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          {/* 1 */}
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img
                src='images/famous-01.webp'
                className='img-fluid'
                alt='watch'
              />
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p> From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img
                src='images/famous-02.webp'
                className='img-fluid'
                alt='watch'
              />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>STUDIO DISPLAY</h5>
                <h6 className='text-dark'>600 nits of brightness</h6>
                <p className='text-dark'> 27-inches 5k Retina Display</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className='col-3'>
            <div className='famous-card text-dark position-relative'>
              <img
                src='images/famous-03.webp'
                className='img-fluid'
                alt='watch'
              />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>SMARTPHONES</h5>
                <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                <p className='text-dark'>
                  Now in Green from $999.00 or $41.62/mo. for 24 mo. footnote*
                </p>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className='col-3'>
            <div className='famous-card  text-dark position-relative'>
              <img
                src='images/famous-04.webp'
                className='img-fluid'
                alt='watch'
              />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>HOME SPACING</h5>
                <h6 className='text-dark'>Room-filling sound</h6>
                <p className='text-dark'>
                  From $699 or $116.6258/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* SPECIAL PRODUCT SECTION */}
      <Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </Container>

      {/* Popular product section */}
      <Container class1='popular-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
        </div>
        <div className='row'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      {/* fourth section */}
      <section className='marque-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest News</h3>
            </div>
          </div>

          <div className='row'>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
