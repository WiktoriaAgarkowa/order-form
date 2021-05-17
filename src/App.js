import React from 'react';
import { connect } from 'react-redux';
import store from './redux/store';

import DishForm from './components/form/form.component';
import Output from './components/output/output.component';
import onSubmit from './api/Submit';
import { addOrder } from './redux/form/form.action';

import './App.scss';

import sandwich from './assets/sandwich.png';
import soup from './assets/soup.png';
import pizza from './assets/pizza.png';


function App ({addOrder}) {

  const submit = values => {
    onSubmit(values);
    console.log(values)
    store.dispatch(addOrder({values}))
  }

  return (
    <div className="App">

      <div className="container">
        <DishForm onSubmit={submit}/>
        <Output />
      </div>

      <img className='background-image sandwich' src={sandwich} alt='sandwich'/>
      <img className='background-image soup' src={soup} alt='soup'/>
      <img className='background-image pizza' src={pizza} alt='pizza'/>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addOrder: (newOrder) => dispatch(addOrder(newOrder)) 
})

export default connect(null, mapDispatchToProps)(App);
