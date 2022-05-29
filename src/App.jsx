import React, {useState} from 'react';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import './App.css';

export default function App() {

  const [cities, setCities] = useState([]);

  const { VITE_API_KEY } = import.meta.env

  function onSearch(ciudad) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${VITE_API_KEY}&units=metric`)
        .then(response => response.json())
        .then(info => {
          if(info.main !== undefined){
            const newCity = {
              min: Math.round(info.main.temp_min),
              max: Math.round(info.main.temp_max),
              img: info.weather[0].icon,
              id: info.id,
              wind: info.wind.speed,
              temp: info.main.temp,
              name: info.name,
              weather: info.weather[0].main,
              clouds: info.clouds.all,
              latitud: info.coord.lat,
              longitud: info.coord.lon
            };

            const foundCity = cities.find(c => c.id === newCity.id)
              if (foundCity) return alert ('La ciudad ya se encuentra.')
              else setCities(oldCities => [newCity, ...oldCities]);
          } else {
            alert("Ciudad no encontrada");
          }
    
    });

  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className='App'>
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}
