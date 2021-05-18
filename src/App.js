import React from 'react';

import DishForm from './components/form/form.component';
import Output from './components/output/output.component';
import onSubmit from './api/Submit';


import './App.scss';

import sandwich from './assets/sandwich.png';
import soup from './assets/soup.png';
import pizza from './assets/pizza.png';


function App () {

  return (
    <div className="App">

      <div className="container">
        <DishForm onSubmit={onSubmit}/>
        <Output />
      </div>

      <img className='background-image sandwich' src={sandwich} alt='sandwich'/>
      <img className='background-image soup' src={soup} alt='soup'/>
      <img className='background-image pizza' src={pizza} alt='pizza'/>
    </div>
  );
}

export default App;
