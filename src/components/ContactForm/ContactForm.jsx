import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';
import { number } from 'yup';

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

  return (
    <Formik initialValues={{ name: ' ', number: '' }} onSubmit={handleSubmit}>
      <Form className={css.container}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <label htmlFor="username">Number</label>
        <Field type="tel" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
