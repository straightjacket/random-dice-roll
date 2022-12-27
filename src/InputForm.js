import React, { useState } from 'react';
import './form.css';

function InputForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name: ${name}`);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default InputForm;
