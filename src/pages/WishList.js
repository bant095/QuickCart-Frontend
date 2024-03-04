import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const WishList = () => {
  return (
    <>
      <Meta title={'WishList'} />
      <BreadCrumb title='Wishlist' />
      <div className='wishlish-wrapper home-wrapper py-5'>
        <div className='container-xxl'>
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
        </div>
      </div>
    </>
  );
};

export default WishList;
