import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import * as Yup from 'yup'
import TextError from "./TextError";

const initialValues = {
  name: 'Moto',
  email: '',
  channel: '',
  comments: '',
  adress: '',
  social: {
      twitter: '',
      facebook: ''
  },
  phoneNumbers: ['', ''],
  phNumbers: ['']
};

const onSubmit = (values) => {
  console.log(values);
};


const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
})

const validationComments = (value) => {
    let error;
    if(!value){
        error = 'Required'
    }
    return error
}


const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage name='name' component={TextError} />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email'>
            {(errorMsg) => {
              return <div className='error'>{errorMsg}</div>;
            }}
          </ErrorMessage>
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field type='text' id='channel' name='channel' />
          <ErrorMessage name='channel' />
        </div>

        <div className='form-control'>
          <label htmlFor='comments'>Comments</label>
          <Field as='textarea' id='comments' name='comments' validate={validationComments} />
          <ErrorMessage name='comments' component={TextError} />
        </div>

        <div className='form-control'>
          <label htmlFor='adress'>Adress</label>
          <FastField name='adress'>
            {({ field, form, meta }) => {
              console.log('render')
              return (
                <div>
                  <input type='text' id='adress' {...field} />
                  {meta.error && meta.touched ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </FastField>
        </div>


        // Social (obj)
        <div className='form-control'>
          <label htmlFor='twitter'>Twitter profile</label>
          <Field type='text' id='twitter' name='social.twitter' />
        </div>

        <div className='form-control'>
          <label htmlFor='facebook'>Facebook profile</label>
          <Field type='text' id='facebook' name='social.facebook' />
        </div>

        // Contacts (arr)

        <div className='form-control'>
          <label htmlFor='firstPh'>Facebook profile</label>
          <Field type='text' id='firstPh' name='phoneNumbers[0]' />
        </div>

        <div className='form-control'>
          <label htmlFor='secondPh'>Facebook profile</label>
          <Field type='text' id='secondPh' name='phoneNumbers[1]' />
        </div>


        <div className='form-control'>
          <label>List of phone numbers</label>
          <FieldArray name='phNumbers'>
              {
                (fieldArrayProps) => {
                    const {form, push, remove} = fieldArrayProps
                    const {values} = form
                    const {phNumbers} = values

                    console.log(form.errors)
                    return (
                        <div>
                            {phNumbers.map((phNumber, index) => {
                                return <div key={index}>
                                    <Field name={`phNumbers[${index}]`} />
                                    {index > 0 && <button type='button' onClick={() => remove(index)}> - </button>}
                                    <button type='button' onClick={() => push('')}> + </button>
                                </div>
                            })}
                        </div>
                    )
                }
              }
          </FieldArray>
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
