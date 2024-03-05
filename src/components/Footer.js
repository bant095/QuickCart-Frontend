import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className=' row align-items-center'>
            <div className='d-flex flex-row align-items-center justify-center gap-30 '>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white fs-5'>Sign Up for Newsletter</h2>
              </div>
              <div className='col-7'>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control py-1'
                    placeholder='Your Email Address'
                    aria-label='Your Email Address'
                    aria-describedby='basic-addon2'
                  />
                  <span className='input-group-text p-2' id='basic-addon2'>
                    Subscribe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer 2 -Middle */}
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div className='footer-links d-flex flex-column'>
                <address className='text-white fs-6'>
                  4947 Valley Street <br /> Woodstown, <br /> NJ 08098
                </address>
                <a
                  href='tel: +1 717-645-2271'
                  className='text-white mt-3 d-block'
                >
                  +1 717-645-2271
                </a>
                <a
                  href='tel: admin@quickcart.com'
                  className='mt-2 d-block mb-1 text-white'
                >
                  admin@quickcart.com
                </a>

                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href='www.facebook.com'>
                    <FaFacebook className='fs-4' />
                  </a>
                  <a href='www.x.com' className='text-white'>
                    <FaXTwitter className='fs-4' />
                  </a>
                  <a href='www.instagram.com' className='text-white'>
                    <FaInstagram className='fs-4' />
                  </a>
                  <a href='www.linkedin.com' className='text-white'>
                    <FaLinkedin className='fs-4' />
                  </a>
                  <a href='www.tiktok.com' className='text-white'>
                    <FaTiktok className='fs-4' />
                  </a>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <h4 className='text-white mb-4'> Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to='/privacy-policy' className='text-white py-2 mb-1'>
                  Privacy Policy
                </Link>
                <Link to='/refund-policy' className='text-white py-2 mb-1'>
                  Refund Policy
                </Link>
                <Link
                  className='text-white py-2 mb-1'
                  to='/terms-and-condition'
                >
                  Terms & Conditions
                </Link>
                <Link className='text-white py-2 mb-1' to='/shipping-policy'>
                  Shipping Policy
                </Link>
                <Link className='text-white py-2 mb-1' to='/'>
                  Blogs
                </Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1' to='/'>
                  About Us
                </Link>
                <Link className='text-white py-2 mb-1' to='/'>
                  FAQ
                </Link>
                <Link className='text-white py-2 mb-1' to='/'>
                  Contact
                </Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1' to='/'>
                  Laptops
                </Link>
                <Link className='text-white py-2 mb-1' to='/'>
                  Headphones
                </Link>
                <Link className='text-white py-2 mb-1' to='/'>
                  Tablets
                </Link>
                <Link className='text-white py-2 mb-1' to='/'>
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* footer 3 - End */}
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}; Powered by FredSync
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
