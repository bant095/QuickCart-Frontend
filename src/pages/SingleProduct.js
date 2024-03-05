import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={'Product Name'} />
      <BreadCrumb title='Product Name' />
      <section className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            {/* left */}
            <div className='col-6'>
              <div className=''></div>
            </div>

            {/* right */}
            <div className='col-6'>
              <div className=''></div>
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
        <div className='reviews-wrapper  home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <h3>Reviews</h3>
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
                  <div className='review-form'>
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
        </div>

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
