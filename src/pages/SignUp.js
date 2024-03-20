import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice';

import * as yup from 'yup';

const signupSchema = yup.object({
  firstname: yup.string().required('First Name is Required'),
  lastname: yup.string().required('Last Name is Requred'),
  email: yup.string().nullable().email('Email Should be valid'),
  mobile: yup.string().required('Mobile Number is required'),
  password: yup.string().required('Password is required'),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(registerUser(values));
    },
  });

  return (
    <>
      <Meta title={'SignUp'} />
      <BreadCrumb title='SignUp' />
      <Container class1='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Create Account</h3>
              <form
                action=''
                onSubmit={formik.handleSubmit}
                className='d-flex flex-column gap-15'
              >
                <CustomInput
                  type='text'
                  name='firstname'
                  placeholder='First Name'
                  value={formik.values.firstname}
                  onChange={formik.handleChange('firstname')}
                  onBlur={formik.handleBlur('firstname')}
                />

                <div className='error'>
                  {formik.touched.firstname && formik.errors.firstname}
                </div>

                <CustomInput
                  type='text'
                  name='lastname'
                  placeholder='Last Name'
                  value={formik.values.lastname}
                  onChange={formik.handleChange('lastname')}
                  onBlur={formik.handleBlur('lastname')}
                />

                <div className='error'>
                  {formik.touched.lastname && formik.errors.lastname}
                </div>

                <CustomInput
                  type='text'
                  name='email'
                  placeholder='Email Address'
                  value={formik.values.email}
                  onChange={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                />

                <div className='error'>
                  {formik.touched.email && formik.errors.email}
                </div>

                <CustomInput
                  type='tel'
                  name='mobile'
                  placeholder='Phone Number'
                  value={formik.values.mobile}
                  onChange={formik.handleChange('mobile')}
                  onBlur={formik.handleBlur('mobile')}
                />

                <div className='error'>
                  {formik.touched.mobile && formik.errors.mobile}
                </div>

                <CustomInput
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formik.values.password}
                  onChange={formik.handleChange('password')}
                  onBlur={formik.handleBlur('password')}
                />

                <div className='error'>
                  {formik.touched.password && formik.errors.password}
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
      </Container>
    </>
  );
};

export default SignUp;
