import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';

const OurStore = () => {
  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title='Our Store' />
      <div className='store-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              {/* Shop By Categories */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>

              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By</h3>

                <h5 className='sub-title'>Availiability</h5>
                <div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id=''
                    />
                    <label className='form-check-label' for=''>
                      In Stock (2)
                    </label>
                  </div>
                  <div class='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id=''
                    />
                    <label className='form-check-label' for=''>
                      Out of Stock (1)
                    </label>
                  </div>
                </div>

                <h5 className='sub-title'>Price</h5>
                <div>
                  <div className='d-flex align-items-center gap-10'>
                    <p>$</p>{' '}
                    <div className='form-floating'>
                      <input
                        type='number'
                        className='form-control'
                        id='floatingInput'
                        placeholder='From'
                      />
                      <label for='floatingInput'>From</label>
                    </div>
                    <div className='form-floating '>
                      <input
                        type='number'
                        className='form-control'
                        id='floatingInput'
                        placeholder='To'
                      />
                      <label for='floatingInput'>To</label>
                    </div>
                  </div>
                </div>

                <h5 className='sub-title'>Colors</h5>
                <div>
                  <div className='d-flex align-items-center'>
                    <ul className='colors ps-0'>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <h5 className='sub-title'>Size</h5>
                <div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='color-1'
                    />
                    <label className='form-check-label' for=''>
                      S (10)
                    </label>
                  </div>
                  <div class='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='color-2'
                    />
                    <label className='form-check-label' for=''>
                      M (13)
                    </label>
                  </div>

                  <div class='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='color-3'
                    />
                    <label className='form-check-label' for=''>
                      L (9)
                    </label>
                  </div>

                  <div class='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='color-3'
                    />
                    <label className='form-check-label' for=''>
                      XL (5)
                    </label>
                  </div>

                  <div class='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='color-3'
                    />
                    <label className='form-check-label' for=''>
                      XXL (5)
                    </label>
                  </div>
                </div>
              </div>

              {/* product tags */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tags </h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Headphone
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Laptop
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Mobile
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Oppo
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Speaker
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Wire
                    </span>
                  </div>
                </div>
              </div>

              {/* Random Products */}
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Product</h3>
                <div>
                  {/* 1 */}
                  <div className='random-products d-flex  mb-3'>
                    <div className='w-50'>
                      <img
                        src='images/watch.jpg'
                        className='img-fluid'
                        alt='watch'
                      />
                    </div>
                    <div className='w-50'>
                      <h5>
                        Kid heKids headphones bulk 10 pack multi colored for
                        students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor='#ffd700'
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className='random-products d-flex mb-3'>
                    <div className='w-50'>
                      <img
                        src='images/watch.jpg'
                        className='img-fluid'
                        alt='watch'
                      />
                    </div>
                    <div className='w-50'>
                      <h5>
                        Kid heKids headphones bulk 10 pack multi colored for
                        students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor='#ffd700'
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-9'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
