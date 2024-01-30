import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
function FormikTest() {
  const initVal = {
    email: '',
    password: '',
  };
  function onSubmit(values, actions) {
    console.log(
      'це виконується коли зроблен <form onSubmit={formikProps.handleSubmit}> формік заміняє стандартний релоад сторінки та вставлє що було у <Formik onSubmit={onSubmit}>'
    );
    actions.resetForm();
  }

  const YupScheme =yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(16),
    code: yup.number(),
  });

  return (
    <Formik initialValues={initVal} onSubmit={onSubmit} validationSchema={YupScheme}>
      {/* ось цю всю штуку можна бути прибрати якщо перейти тупо на копоненти форміка */}
      {(formikProps) => {
        console.log(formikProps);
        return (
          // замість <form onSubmit={formikProps.handleSubmit}>
          <Form>
            <input
              type="email"
              name="email"
              value={formikProps.values.email}
              onChange={formikProps.handleChange}
            />
            {/* замість <input
              type="password"
              name="password"
              value={formikProps.values.password}
              onChange={formikProps.handleChange}
            /> */}
            <div>
              <Field type="password" name="password" />
              {/* відображення помилки вводу */}
              <ErrorMessage name="password" component={'div'} className='asdasdasd' />
            </div>
            {/* щоб філд використати як select */}
            <Field as="select" name="select">
              <option value={1}>1</option>
              <option value={2}>2</option>
            </Field>
            <button>Submit</button>
          </Form>

          // </form>
        );
      }}
    </Formik>
  );
}

export default FormikTest;
