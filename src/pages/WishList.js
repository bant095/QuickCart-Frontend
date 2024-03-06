import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';

const WishList = () => {
  return (
    <>
      <Meta title={'WishList'} />
      <BreadCrumb title='Wishlist' />
      <Container class1='wishlish-wrapper home-wrapper py-5'>
        <div className='row'>
          {/* 1 */}
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
              <img
                src='images/cross.svg'
                alt='cross'
                className='position-absolute cross img-fluid'
              />
              <div className='wishlist-card-image'>
                <img
                  src='images/watch.jpg'
                  className='img-fluid w-100'
                  alt='watch'
                />
              </div>
              <div className='py-2'>
                <h5 className='title'>
                  Honor T1 7.0 1GB RAM 8GB ROM 7 inches with Wi-fi+3G Tablet
                </h5>
                <h6 className='price'>$100</h6>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
              <img
                src='images/cross.svg'
                alt='cross'
                className='position-absolute cross img-fluid'
              />
              <div className='wishlist-card-image'>
                <img
                  src='images/watch.jpg'
                  className='img-fluid w-100'
                  alt='watch'
                />
              </div>
              <div className='py-2'>
                <h5 className='title'>
                  Honor T1 7.0 1GB RAM 8GB ROM 7 inches with Wi-fi+3G Tablet
                </h5>
                <h6 className='price'>$100</h6>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
              <img
                src='images/cross.svg'
                alt='cross'
                className='position-absolute cross img-fluid'
              />
              <div className='wishlist-card-image'>
                <img
                  src='images/watch.jpg'
                  className='img-fluid w-100'
                  alt='watch'
                />
              </div>
              <div className='py-2'>
                <h5 className='title'>
                  Honor T1 7.0 1GB RAM 8GB ROM 7 inches with Wi-fi+3G Tablet
                </h5>
                <h6 className='price'>$100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WishList;
