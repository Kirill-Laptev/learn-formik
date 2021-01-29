import React from "react";
import { useFormik, Formik } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log(values);
};


const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
})


const YoutubeForm = () => {

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            {...formik.getFieldProps('name')}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className='error'>{formik.errors.name}</div>
          ) : null}
        </div>
    
        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            id='email'
            name='email'
            {...formik.getFieldProps('email')}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='channel'
            name='channel'
            {...formik.getFieldProps('channel')}
          />
          {formik.errors.channel && formik.touched.channel ? (
            <div className='error'>{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </Formik>
  );
};

export default YoutubeForm;
