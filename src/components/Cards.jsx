import React from 'react';
import Card from './Card'
import '../stylesheet/Cards.css';

export default function Cards({cities, onClose}) {
  return (
    <div className="background">
      {
        cities?.map((city) => {
          return (
            <Card key={city.id}
              max={city.max}
              min={city.min}
              name={city.name}
              img={city.img}
              onClose={() => onClose(city.id)}
            />
          )
        })
      }
    </div>
  );
};