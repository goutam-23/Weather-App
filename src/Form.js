import React, { useState } from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleChange = event => {
    setCity(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      className='inp'
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city"
      />
      <button  className='btn' type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
