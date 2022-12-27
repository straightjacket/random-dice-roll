import React, { useState } from 'react';
import './form.css';
import {Grid} from '@mui/material/Grid';

function InputForm() {
  const [d6, setD6] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting D6: ${d6}`);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label>
          D-6:
          <input type="text" d6="d6" value={d6} onChange={(event) => setD6(event.target.value)} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default InputForm;
