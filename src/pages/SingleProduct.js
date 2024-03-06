import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { Link } from 'react-router-dom';
import { FaCodeCompare } from 'react-icons/fa6';
import { CiHeart } from 'react-icons/ci';

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);

  const props = {
    width: 400,
    height: 500,
    zoomWidth: 600,
    img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };

  // Copy text function board
  const copyToClipboard = (text) => {
    console.log('text', text);
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <>
      <Meta title={'Product Name'} />
      <BreadCrumb title='Product Name' />
      <section className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            {/* main left */}
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className='d-flex flex-wrap gap-15 other-product-images'>
                <div>
                  <img
                    src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                    className='img-fluid'
                    alt=''
                  />
                </div>
                <div>
                  <img
                    src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                    className='img-fluid'
                    alt=''
                  />
                </div>
                <div>
                  {' '}
                  <img
                    src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                    className='img-fluid'
                    alt=''
                  />
                </div>
                <div>
                  <img
                    src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                    className='img-fluid'
                    alt=''
                  />
                </div>
              </div>
            </div>

            {/* main right */}
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3>
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>$ 100</p>
                  <div className='d-flex gap-10 align-items-center'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor='#ffd700'
                    />
                    <p className='mb-0 t-review'>( 2 reviews )</p>
                  </div>
                  <a className='review-btn' href='#review'>
                    Write a Review
                  </a>
                </div>

                <div className=' py-3'>
                  <div className='d-flex gap-10 align-items-center'>
                    <h3 className='product-headings'>Type: </h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center'>
                    <h3 className='product-headings'>Brand: </h3>
                    <p className='product-data'>Havells</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center'>
                    <h3 className='product-headings'>Category: </h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center'>
                    <h3 className='product-headings'>Tag: </h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center'>
                    <h3 className='product-headings'>Avaliability: </h3>
                    <p className='product-data'>In Stock</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-headings'>Size: </h3>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>
                        S
                      </span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>
                        M
                      </span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>
                        L
                      </span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>
                        XXL
                      </span>
                    </div>
                  </div>

                  <div className='d-flex gap-10 flex-column  mt-2 mb-3'>
                    <h3 className='product-headings'>Color: </h3>
                    <Color />
                  </div>

                  <div className='d-flex gap-10 align-items-center flex-row mt-2 mb-3'>
                    <h3 className='product-headings'>Quantity: </h3>
                    <div>
                      <input
                        type='number'
                        name=''
                        min={1}
                        max={10}
                        style={{ widh: '50px' }}
                        id=''
                        className='form-control'
                      />
                    </div>
                    {/* -- */}

                    <div className='d-flex gap-30 ms-5 align-items-center'>
                      <button className='button border-0' type='submit'>
                        Add to Cart
                      </button>
                      <button className='button border-0 signup'>
                        Buy Now
                      </button>
                    </div>
                  </div>

                  <div className='d-flex align-items-center gap-30'>
                    <div>
                      <a href='/'>
                        <CiHeart className='fs-5 ma-2' /> Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href='/'>
                        <FaCodeCompare className='fs-5 ma-2' />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>

                  <div className='d-flex flex-column  gap-10 mt-3  my-3'>
                    <h3 className='product-headings'>Shipping & Returns: </h3>
                    <p className='product-data'>
                      Free shipping and returns available on all orders! We ship
                      all US domestic orders within
                      <b> 5-10 business days!</b>
                    </p>
                  </div>

                  <div className='d-flex align-items-center gap-10  my-3'>
                    <h3 className='product-headings'>Product Link:</h3>
                    <a
                      href='javascript:void(0);'
                      onClick={() => {
                        copyToClipboard(
                          'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        );
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* description */}
        <div className='description-wrapper py-5 home-wrapper-2'>
          <div className='cntainer-xxl'>
            <div className='row'>
              <div className='col-12'>
                <h4>Description</h4>
                <div className='bg-white p-3'>
                  <p>
                    "At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, omnis voluptas assumenda est, omnis
                    dolor repellendus."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* reviews */}
        <section className='reviews-wrapper  home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <h3 id='review'>Reviews</h3>
                <div className='review-inner-wrapper'>
                  <div className='review-head d-flex justify-content-between align-items-end'>
                    <div>
                      <h4 className='mb-2'>Customer Review</h4>
                      <div className='d-flex gap-10 align-items-center'>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor='#ffd700'
                        />
                        <p className='mb-0 '>Based on 8 reviews</p>
                      </div>
                    </div>

                    {/* State render on ordered form {write a review} */}
                    {orderedProduct && (
                      <div>
                        <a
                          className='text-dark text-decoration-underline'
                          href='/'
                        >
                          Write a Review
                        </a>
                      </div>
                    )}
                  </div>

                  {/* REVIEW FORM */}
                  <div className='review-form py-4'>
                    <h4>Write a Review</h4>
                    <form action='' className='d-flex flex-column gap-15'>
                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={0}
                          edit={true}
                          activeColor='#ffd700'
                        />
                      </div>

                      <div>
                        <textarea
                          className='form-control w-100'
                          name=''
                          id=''
                          rows='10'
                          col='30'
                          placeholder='Write your comments here'
                        ></textarea>
                      </div>
                      <div>
                        <div className='d-flex justify-content-end'>
                          <button className='button border-0'>
                            Submit a Review
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className='reviews mt-4'>
                    <div className='review'>
                      <div className='d-flex gap-10 align-items-center'>
                        <div className='mb-0'>Alfred</div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor='#ffd700'
                        />
                      </div>
                      <p className='mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim suscipit reiciendis laudantium accusantium sit
                        similique? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Expedita unde nemo ut?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* product card */}
        <section className='popular-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <h3 className='section-heading'>Our Popular Products</h3>
              </div>
            </div>
            <div className='row'>
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default SingleProduct;
