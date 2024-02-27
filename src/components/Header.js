import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
  return (
    <>
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
            <div className='col-5'></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
