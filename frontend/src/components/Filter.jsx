import React from 'react';

const Filter = ({ handleChange, handleClick, toggleVisibility }) => (
  <div className="Filter">
    <input onChange={handleChange} />
    <button onClick={handleClick}> New </button>
  </div>
);

export default Filter;
