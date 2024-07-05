import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';

export default function useForm(onAdd) {
  const handleSubmit = (values, actions) => {
    console.log('handleSubmit', values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: 'Ryan Gosling', number: '9379992' }}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label htmlFor="username">Name</label>
        <Field type="text" name="username" />
        <label htmlFor="username">Number</label>
        <Field type="tel" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
