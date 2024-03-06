import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import watch from '../images/watch.jpg';
import Container from '../components/Container';

const Checkout = () => {
  return (
    <>
      <Container class1='checkout-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          {/* left container */}
          <div className='col-7'>
            <div className='checkout-left-data'>
              <h3 className='website-name'>QuickCart</h3>

              <nav
                style={{ '--bs-breadcrumb-divider': '>' }}
                aria-label='breadcrumb'
              >
                <ol class='breadcrumb'>
                  <li class='breadcrumb-item'>
                    <Link className='text-dark total-price' to='/cart'>
                      Cart
                    </Link>
                  </li>
                  &nbsp; / &nbsp;
                  <li
                    class='breadcrumb-item total-price active'
                    aria-current='page'
                  >
                    Information
                  </li>
                  &nbsp; / &nbsp;
                  <li class='breadcrumb-item total-price active'>Shipping</li>
                  &nbsp; / &nbsp;
                  <li
                    class='breadcrumb-item active total-price'
                    aria-current='page'
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className='title total'>Contact Information</h4>
              <p className='user-details'>
                Alfred (abolajiayodeji93@gmail.com)
              </p>
              <h4 className='mb-4'>Shipping Address</h4>
              <form
                className='d-flex gap-15 flex-wrap justify-content-between'
                action=''
              >
                <div className='w-100'>
                  <select name='' className='form-control form-select' id=''>
                    <option value='' selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>

                <div className='flex-grow-1'>
                  <input
                    type='text'
                    placeholder='First Name'
                    className='form-control'
                  />
                </div>
                <div className='flex-grow-1'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    className='form-control'
                  />
                </div>
                <div className='w-100'>
                  <input
                    type='text'
                    placeholder='Address'
                    className='form-control'
                  />
                </div>
                <div className='w-100'>
                  <input
                    type='text'
                    placeholder='Apartment, Suite, etc..'
                    className='form-control'
                  />
                </div>
                <div className='flex-grow-1'>
                  <input
                    type='text'
                    placeholder='City'
                    className='form-control'
                  />
                </div>

                <div className='flex-grow-1'>
                  <select name='' className='form-control form-select' id=''>
                    <option value='' selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className='flex-grow-1'>
                  <input
                    type='text'
                    placeholder='ZipCode'
                    className='form-control'
                  />
                </div>

                {/* btn */}
                <div className='w-100'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/cart' className='text-dark'>
                      <BsArrowLeft className='me-2' /> Return to Cart
                    </Link>
                    <Link to='/' className='button'>
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* ============== */}
          {/* right container */}
          <div className='col-5'>
            <div className='border-bottom py-4'>
              <div className='d-flex gap-10 align-items-center'>
                <div className='w-75 d-flex gap-10'>
                  <div className='w-25 position-relative'>
                    <span
                      style={{ top: '-10px', right: '2px' }}
                      className='badge bg-secondary text-whte rounded-circle p-3 position-absolute'
                    >
                      1
                    </span>
                    <img src={watch} alt='watch' className='img-fluid' />
                  </div>
                  <div>
                    <h5 className='total-price'>gfghytr</h5>
                    <p className='total-price'>S / #A85A5A</p>
                  </div>
                </div>
                <div className='flex-grow-1'>
                  <h5 className='total'>$100</h5>
                </div>
              </div>
            </div>

            <div className='border-bottom py-4'>
              <div className='d-flex justify-content-between align-items-center'>
                <p>Sub Total</p>
                <p>$500</p>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='mb-0'>Shipping</p>
                <p className='mb-0'>Enter shipping address</p>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
              <h4>Total</h4>
              <h5>$500</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
