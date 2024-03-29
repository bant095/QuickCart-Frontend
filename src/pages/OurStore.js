import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title='Our Store' />
      <Container class1='store-wrapper-2 py-5'>
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
                  <label className='form-check-label' htmlFor=''>
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
                  <label className='form-check-label' htmlFor=''>
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
                    <label htmlFor='floatingInput'>From</label>
                  </div>
                  <div className='form-floating '>
                    <input
                      type='number'
                      className='form-control'
                      id='floatingInput'
                      placeholder='To'
                    />
                    <label htmlFor='floatingInput'>To</label>
                  </div>
                </div>
              </div>

              <h5 className='sub-title'>Colors</h5>
              <div>
                <Color />
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
                  <label className='form-check-label' htmlFor=''>
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
                  <label className='form-check-label' htmlFor=''>
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
                  <label className='form-check-label' htmlFor=''>
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
                  <label className='form-check-label' htmlFor=''>
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
                  <label className='form-check-label' htmlFor=''>
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

          {/* ===================== */}
          {/* Second column */}
          <div className='col-9'>
            <div className='filter-sort-grid mb-4'>
              <div className='d-flex justify-content-between align-items-center'>
                {/*sortby   */}
                <div className='d-flex align-items-center gap-10'>
                  <p className='mb-0 d-block' style={{ width: '100px' }}>
                    Sort By:
                  </p>
                  <div class='mb-3'>
                    <select
                      className='form-select form-control'
                      defaultValue={'manual'}
                      name=''
                      id=''
                    >
                      <option disabled value='DEFAULT'></option>
                      <option value='manual'>Featured</option>
                      <option value='best-selling'>Best selling</option>
                      <option value='title-ascending'>
                        Alphabetically, A-Z
                      </option>
                      <option value='title-descending'>
                        Alphabetically, Z-A
                      </option>
                      <option value='price-ascending'>
                        Price, low to high
                      </option>
                      <option value='price-descending'>
                        Price, high to low
                      </option>
                      <option value='created-ascending'>
                        Date, old to new
                      </option>
                      <option value='created-descending'>
                        Date, new to old
                      </option>
                    </select>
                  </div>
                </div>

                {/* filter */}
                <div className='d-flex align-item-center gap-10'>
                  <p className='totalproducts mb-0'>21 Products</p>
                  <div className='d-flex gap-10 align-items-center grid'>
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src='images/gr4.svg'
                      alt='grid'
                      className='d-block img-fluid'
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src='images/gr3.svg'
                      alt='grid'
                      className='d-block img-fluid'
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src='images/gr2.svg'
                      alt='grid'
                      className='d-block img-fluid'
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src='images/gr.svg'
                      alt='grid'
                      className='d-block img-fluid'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='products-list pb-5'>
              <div className='d-flex gap-10 flex-wrap'>
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
