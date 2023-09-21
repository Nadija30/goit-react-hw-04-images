// import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.info('Введіть свій запит, будь ласка!');
      return;
    }
    onSubmit(value);
    reset();
  };

  const reset = () => setValue('');

  return (
    <div className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.form_input}
          type="text"
          onChange={handleChange}
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.form_button}>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
