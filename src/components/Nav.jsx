
import React, { useState } from 'react';
import Logo from '../images/cloud.png'
import SearchBar from './SearchBar.jsx';
import '../stylesheet/Nav.css';

function Nav({onSearch}) {

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 20) {
        setColor(true)
    } else {
        setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  return (
    <nav className={color ? 'navbar header-bg' : 'navbar'}>
      <div className='center-nav'>
      <section className='title'>
        <img src={Logo} alt='Logo Henry' id='logoHenry'/>
        <h1>Weather <span className='bold'> App </span> </h1>
      </section>
      <SearchBar onSearch={onSearch}/>
      </div>
    </nav>
  );
};

export default Nav;
