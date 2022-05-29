import React from 'react';
import '../stylesheet/Card.css';

export default function Card(props) {

  const addDegrees = (elem) => elem + '°';

  return (
    
      <div className='card'>
        <div className='btn-container'>
          <button className='btn' onClick={props.onClose}> X {props.onClick}</button>
        </div>
        <section className='name-city'>
          <h2>{props.name}</h2>
        </section>
        <div className='separator'>
          <section>
            <h2 className='text'>Min</h2>
            <h2>{addDegrees(props.min)}</h2>
          </section>
          <section>
            <h2 className='text'>Max</h2>
            <h2>{addDegrees(props.max)}</h2>
          </section>
          <img src={(`http://openweathermap.org/img/wn/${props.img}@2x.png`)} alt="Imagen del Clima"/>
        </div>
      </div>
    
  );
};