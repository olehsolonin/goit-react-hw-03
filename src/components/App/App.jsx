import { useState, useEffect } from 'react';
import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import clsx from 'clsx';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  const initialTasks = [
    { id: 'id-1', name: 'Billy Herrington', number: '459-12-56' },
    { id: 'id-2', name: 'Ryan Gosling', number: '443-89-12' },
    { id: 'id-3', name: 'Ricardo Milos', number: '645-17-79' },
    { id: 'id-4', name: 'Antonio Banderas', number: '227-91-26' },
  ];

  const [tasks, setTasks] = useState(() => {
    const savedData = localStorage.getItem('getData');
    try {
      const parsedData = JSON.parse(savedData);
      console.log('Парсінг даних з localStorage:', parsedData);
      return Array.isArray(parsedData) ? parsedData : initialTasks;
    } catch (e) {
      console.error('Помилка парсінгу даних з localStorage', e);
      return initialTasks;
    }
  });

  useEffect(() => {
    console.log('Збережені дані в localStorage:', tasks);
    localStorage.setItem('getData', JSON.stringify(tasks));
  }, [tasks]);

  const [filter, setFilter] = useState('');

  const handleSetFilter = filter => {
    setFilter(filter);
  };

  const addTask = newTask => {
    console.log('Новий контакт:', newTask);
    setTasks(tasks => {
      return [...tasks, newTask];
    });
  };

  const deleteTask = taskId => {
    setTasks(tasks => {
      return tasks.filter(task => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.appContainer}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm onAdd={addTask} />
      <SearchBox filter={filter} onFilter={handleSetFilter} />
      <ContactList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}
