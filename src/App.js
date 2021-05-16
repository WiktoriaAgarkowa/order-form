import React from 'react';
import axios from 'axios';
import { apiRequest } from './redux/form/form.action';

import DishForm from './components/form/form.component';

import './App.scss';

import sandwich from './assets/sandwich.png';
import soup from './assets/soup.png';
import pizza from './assets/pizza.png';

const submit = values => {

  values.id = Date.now()
  values.no_of_slices = parseInt(values.no_of_slices);
  values.diameter = parseInt(values.diameter);
  values.spiciness_scale = parseInt(values.spiciness_scale);
  values.slices_of_bread = parseInt(values.slices_of_bread);

  const headers = {
    'Content-Type': 'application/json'
  }

  axios.post(
    'https://frosty-wood-6558.getsandbox.com:443/dishes',
    JSON.stringify(values),
    {'headers': headers})
    .then((req) => {
      console.log(req)
    })
    .catch((error) => {
      console.log(error.message);
    });

}

const App = () => {

  return (
    <div className="App">

      <DishForm onSubmit={submit}/>

      <img className='background-image sandwich' src={sandwich} alt='sandwich'/>
      <img className='background-image soup' src={soup} alt='soup'/>
      <img className='background-image pizza' src={pizza} alt='pizza'/>
    </div>
  );
}


export default App;
