import React, { useState } from 'react';

export default function SearchBar({onSearch}) {

  const [input, setInput] = useState('')

  function onSubmit(e) {
    e.preventDefault();
    onSearch(input);
    setInput('');
  }

  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <form onSubmit = {(e) => onSubmit(e)} className='container-searchBar'>
      <input
        value={input}
        onChange={(e) => onInputChange(e)}
        type="text"
        placeholder="Ciudad..."
        className='input-uno'
      />
      <input type="submit" value="Agregar" className='input-dos' />
    </form>
  );
}