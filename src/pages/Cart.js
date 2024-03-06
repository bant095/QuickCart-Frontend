import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import watch from '../images/watch.jpg';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <Meta title={'Cart'} />
      <BreadCrumb title='Cart' />

      <section className='cart-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
              </div>
              {/* col 1 */}
              <div className='cart-data py-3 d-flex justify-content-between align-items-center'>
                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                  <div className='w-25'>
                    <img className='img-fluid' src={watch} alt='productImage' />
                  </div>
                  <div className='w-75'>
                    <p>Kids headphones bulk 10 pack multi colored</p>
                    <p>Size: S</p>
                    <p>Color: #221918 </p>
                  </div>
                </div>
                {/* 2 */}
                <div className='cart-col-2'>
                  <h5 className='price'>$100</h5>
                </div>

                {/* 3 */}
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div>
                    <input
                      type='number'
                      name=''
                      min={1}
                      max={10}
                      className='form-control'
                      id=''
                    />
                  </div>
                  <div>
                    <MdDelete className='text-danger' />
                  </div>
                </div>

                {/* 4 */}
                <div className='cart-col-4'>
                  <h5 className='price'>$100</h5>
                </div>
              </div>
            </div>
            <div className='col-12 py-2 mt-4'>
              <div className=''>
                <div>
                  <Link className='button'>Continue To Shopping</Link>
                </div>
                <div className='d-flex justify-content-between mt-4'>
                  <p>Order special instructions</p>
                  <div>
                    <h4>Sub Total: $100</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to='/' className='button'>
                      Checkout
                    </Link>
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

export default Cart;
