import { Field, ErrorMessage } from 'formik';
import style from '../../Sass/register.module.scss';

const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);

function FieldComponent({ name, label = capitalize(name), type = 'text' }) {
  return (
    <>
      <div>
        <label>
          { label }
          <Field type={type} name={name} />
        </label>
        <ErrorMessage name={name} component="p" className={style.error} />
      </div>
    </>
  );
}

export default FieldComponent;
