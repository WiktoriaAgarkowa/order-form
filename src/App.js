import React from 'react';

import DishForm from './components/form/form.component';
import sandwich from './assets/sandwich.png';
import soup from './assets/soup.png';
import pizza from './assets/pizza.png';
import './App.scss';

const submit = values => {
  console.log(values)
}

function App() {
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
