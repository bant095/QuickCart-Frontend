import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
  return (
    <>
      {/* first header */}
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div class='row'>
            <div class='col-6'>
              <p className='text-white mb-0'>
                free shopping over $100 & Free Returns
              </p>
            </div>

            <div class='col-6'>
              <p className='text-end text-white'>
                Hotline:{' '}
                <a className='text-white' href='tel: +1 717-645-2271'>
                  +1 717-645-2271
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* second header */}
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-item-center'>
            <div className='col-2'>
              <h1>
                <Link className='text-white'>QuickCart</Link>
              </h1>
            </div>
            <div className='col-5'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search Product Here'
                  aria-label='Search Product Here'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-3' id='basic-addon2'>
                  <CiSearch className='fs-8' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link
                    to='/compare-product'
                    className='d-flex align-items-center justify-center gap-10 text-white'
                  >
                    <img src='/images/compare.svg' alt='compare' />
                    <p className='mb-0'>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to='/wishlist'
                    className='d-flex align-items-center justify-center gap-10 text-white'
                  >
                    <img src='/images/wishlist.svg' alt='wishlist' />
                    <p className='mb-0'>
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to='/login'
                    className='d-flex align-items-center justify-center gap-10 text-white'
                  >
                    <img src='/images/user.svg' alt='user' />
                    <p className='mb-0'>
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to='/cart'
                    className='d-flex align-items-center justify-center gap-10 text-white'
                  >
                    <img src='/images/cart.svg' alt='cart' />
                    <div className='d-flex flex-column align-items-center gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* third header */}
      <header className='header-bottom py-3'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-30'>
              <div>
                <div className='dropdown'>
                  <button
                    className='btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center '
                    type='button'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <img src='images/menu.svg' alt='' />
                    <span className='me-5 inline-block'> Shop Categories</span>
                  </button>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton1'
                  >
                    <li>
                      <Link className='dropdown-item text-white' to='/'>
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item text-white' to='/'>
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item text-white' to='/'>
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='menu-links'>
                <div className='d-flex align-items-center gap-15'>
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to='/product'>Our Store</NavLink>
                  <NavLink to='/blogs'>Blogs</NavLink>
                  <NavLink to='/contact'>Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
