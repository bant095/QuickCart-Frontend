import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <Meta title={'SignUp'} />
      <BreadCrumb title='SignUp' />
      <div className='login-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3'>Create Account</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type='text'
                      className='form-control'
                      name='name'
                      id=''
                      placeholder='Full Name'
                    />
                  </div>

                  <div>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      id=''
                      placeholder='Email Address'
                    />
                  </div>

                  <div>
                    <input
                      type='tel'
                      className='form-control'
                      name='mobile'
                      id=''
                      placeholder='Phone Number'
                    />
                  </div>

                  <div className=''>
                    <input
                      type='password'
                      className='form-control'
                      name='password'
                      id=''
                      placeholder='Password'
                    />
                  </div>
                  {/* btn */}
                  <div className='mt-3 d-flex justify-content-center align-items-center'>
                    <button className='button border-0' type='text'>
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
