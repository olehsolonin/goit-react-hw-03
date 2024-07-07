import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { number } from 'yup';
import { useId } from 'react';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    console.log('handleSubmit', values.name, values.number);
    onAdd({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
    console.log(onAdd);
    actions.resetForm();
  };

  const nameId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={{ name: ' ', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage className={css.Error} name="name" component="span" />
        <label htmlFor={passwordId}>Number</label>
        <Field type="tel" name="number" id={passwordId} />
        <ErrorMessage className={css.Error} name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
