import { Component } from 'react';
import style from '../../Sass/register.module.scss';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import FieldComponent from '../FieldComponent';
class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const defaultValues = {
      login: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordCofirm: '',
      dateOfBirth: '',
    };
    const validationSchema = yup.object({
      login: yup
        .string()
        .min(3, 'Must be at least 3 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      firstName: yup
        .string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: yup
        .string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: yup.string().email().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}$/, 'Invalid email address').required('Required'),
      password: yup.string().min(8, 'password must be at least 8 characters').required('Required'),
      passwordCofirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required'),
      dateOfBirth: yup.date().min(new Date('02.02.1800'), 'Not valid date').max(new Date('02.02.2006'), 'To create new account must be at least 18 years old').required('Required'),
    });
    const OnSubmit = (values) => {
      console.log('yeeeeeeeeee');
      console.log(new Date(18))
    };
    return (
      <div className={style.warper}>
        <section className={style.registerForm}>
          <h1>Regisration Form</h1>
          <Formik
            initialValues={defaultValues}
            validationSchema={validationSchema}
            onSubmit={(values) => OnSubmit(values)}
          >
            {({ isSubmitting }) => (
              <>
                <Form>
                  <FieldComponent name={'login'}/>
                  <FieldComponent name={'firstName'} label={'First name'}/>
                  <FieldComponent name={'lastName'} label={'Last name'}/>
                  <FieldComponent name={'email'}/>
                  <FieldComponent name={'password'} type='password'/>
                  <FieldComponent name={'passwordCofirm'} label={'Cofirm password'} type='password'/>
                  <FieldComponent name={'dateOfBirth'} label={'Date Of Birth'} type='date'/>
                  <button type="submit" className={style.button}>Register a new account</button>
                </Form>
              </>
            )}
          </Formik>
        </section>
      </div>
    );
  }
}

export default RegisterForm;
