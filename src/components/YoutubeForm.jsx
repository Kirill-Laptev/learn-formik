import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: 'Moto',
  email: '',
  channel: '',
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
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field
            type='text'
            id='name'
            name='name'
          />
          <ErrorMessage name='name' />
        </div>
    
        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <Field
            type='email'
            id='email'
            name='email'
          />
          <ErrorMessage name='email' />
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field
            type='text'
            id='channel'
            name='channel'
          />
          <ErrorMessage name='channel' />
        </div>

        <div className='form-control'>
          <label htmlFor='comments'>Comments</label>
          <Field
            as='textarea'
            id='comments'
            name='comments'
          />
        </div>

        <div className='form-control'>
          <label htmlFor='adress'>Adress</label>
            <Field name='adress'>
            {
                ({field, form, meta}) => {
                    console.log(props)
                    return (
                        <div>
                            <input type='text' id='adress' {...field}/>
                            {meta.error && meta.touched ? <div>{meta.error}</div> : null}    
                        </div>
                    )
                }
            }
            </Field>
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
