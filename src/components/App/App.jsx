import { useState, useEffect } from 'react';
import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import clsx from 'clsx';
import * as Yup from 'yup';
import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  const initialTasks = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const addUser = newUser => {
    console.log('adding new user', newUser);
  };

  return (
    <div className={css.appContainer}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      {/* <SearchBox /> */}
      {/* <ContactList /> */}
    </div>
  );
}
