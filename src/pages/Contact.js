import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { FaHome, FaInfo } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={'Contact Us'} />
      <BreadCrumb title='Contact Us' />

      <Container class1='contact-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46310560885!2d3.1191404803109495!3d6.548369375048859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1709436356354!5m2!1sen!2sng'
              width='600'
              height='450'
              className='border-0 w-100'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>

          {/* form */}
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Full Name'
                    />
                  </div>
                  <div>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                  <div>
                    <input
                      type='tel'
                      className='form-control'
                      placeholder='Mobile Number'
                    />
                  </div>

                  <div>
                    <textarea
                      className='form-control w-100'
                      name=''
                      id=''
                      rows='10'
                      col='30'
                      placeholder='Comments'
                    ></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              {/* right side */}
              <div>
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaHome className='fs-5' />
                      <address className='mb-0'>
                        4947 Valley Street Woodstown, NJ 08098
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaPhone className='fs-5' />
                      <a href='tel: +1 7176452271'>+1 717-645-2271</a>
                    </li>

                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <IoMdMail className='fs-5' />
                      <a href='admin@quickcart.com'>admin@quickcart.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaInfo className='fs-5' />
                      <p className='mb-0'>Monday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
