import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className='col-3'>
      <div className='blog-card'>
        <div className='card-image'>
          <img src='images/blog-1.jpg' className='img-fluid' alt='blog' />
        </div>
        <div className='blog-content'>
          <p className='date'>20 Feb., 2024</p>
          <h5 className='title'>
            <h2 className='article-card_title 123' id='Article-558559887529'>
              A beautiful Sunday Morning Renaissance
            </h2>
          </h5>
          <p className='desc'>
            Ah, the sun's gentle embrace awakens the world with its golden rays,
            casting a warm glow upon the earth below.
          </p>
          <Link to='/' className='button'>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
