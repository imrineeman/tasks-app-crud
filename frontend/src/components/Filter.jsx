import React from 'react';

const Filter = ({ handleChange }) => (
  <div className="Filter">
    <input onChange={handleChange} />
  </div>
);

export default Filter;
