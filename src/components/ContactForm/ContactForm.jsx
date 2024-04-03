import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .min(3, 'Number must be at least 3 characters')
      .max(50, 'Number must be at most 50 characters')
      .required('Number is required'),
  });

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.nameContainer}>
          <label className={css.field} htmlFor={nameId}>
            Name
          </label>
          <Field type="text" id={nameId} name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </div>
        <div className={css.numberContainer}>
          <label className={css.field} htmlFor={numberId}>
            Number
          </label>
          <Field type="text" id={numberId} name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />
        </div>
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
