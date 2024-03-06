import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import blog from '../images/blog-1.jpg';

const SingleBlog = () => {
  return (
    <>
      <Meta title={'Dynamic Blog Name'} />
      <BreadCrumb title='Dynamic Blog Name' />

      <div className='blog-wrapper home-wrapper-2 py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-card'>
                <Link to='/blogs' className='d-flex align-items-center gap-10'>
                  <IoIosArrowRoundBack className='fs-5' />
                  Go back to blogs
                </Link>
                <h3 className='title'>
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src={blog} alt='blog' />
                <p>
                  You’re only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury –
                  it’s not something people need, but it’s what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                  vestibulum pretium commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a
                  accumsan nisl ante vestibulum.
                </p>
              </div>
            </div>
            {/* ===========RIGHT */}
            <div className='col-9'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
