import { Component } from 'react';
import style from '../../Sass/register.module.scss';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
      email: yup.string().email('Invalid email address').required('Required'),
      password: yup.string().required('Required'),
      passwordCofirm: yup.string().required('Required'),
      dateOfBirth: yup.date().required('Required'),
    });
    const OnSubmit = (values) => {
      console.log('yeeeeeeeeee');
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
                  <div>
                    <label>
                      Login
                      <Field type="text" name="login" />
                    </label>
                    <ErrorMessage name="login" component="div" />
                  </div>
                  <div>
                    <label>
                      First name
                      <Field type="text" name="firstName" />
                    </label>
                    <ErrorMessage name="firstName" component="div" />
                  </div>
                  <div>
                    <label>
                      Last name
                      <Field type="text" name="lastName" />
                    </label>
                    <ErrorMessage name="lastName" component="div" />
                  </div>
                  <div>
                    <label>
                      Email
                      <Field type="email" name="email" />
                    </label>
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div>
                    <label>
                      Password
                      <Field type="password" name="password" />
                    </label>
                    <ErrorMessage name="password" component="div" />
                  </div>
                  <div>
                    <label>
                      Cofirm password
                      <Field type="password" name="passwordCofirm" />
                    </label>
                    <ErrorMessage name="passwordCofirm" component="div" />
                  </div>
                  <div>
                    <label>
                      Date Of Birth
                      <Field type="date" name="dateOfBirth" />
                    </label>
                    <ErrorMessage name="dateOfBirth" component="div" />
                  </div>
                  <button type="submit">Register a new account</button>
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
