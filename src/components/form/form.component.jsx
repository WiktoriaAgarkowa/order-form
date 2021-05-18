import React from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';
import validate from './validate';

import './form.styles.scss';


let DishForm = props => {

    const { handleSubmit, dishType, reset } = props;

    const options = ['pizza', 'soup', 'sandwich'];

    return <form onSubmit={handleSubmit}>
              
              <h1>Make an order!</h1>

              <CustomInput name="name" component="input" label="Dish Name"/>

              <CustomInput name="preparation_time" component="input" type="time" step="2" style={{display: "block"}}/>

              <CustomInput name="type" component="select" options={options}/>

              {dishType === 'pizza' ? <CustomInput name="no_of_slices" component="input" type="number" min="2" label="slices"/> : null}

              {dishType === 'pizza' ? <CustomInput name="diameter" component="input" type="number" min="15" label="diameter"/>
              : null}

              {dishType === 'soup' ? <CustomInput name="spiciness_scale" component="input" type="range" min="1" max="10" step="1"/> : null}

              {dishType === 'sandwich' ? <CustomInput name="slices_of_bread" component="input" type="number" min="2" label="Slices of bread"/> : null}

              <div className="buttons">
                <CustomButton
                  type="submit"           
                  child='Submit!'
                />
                <CustomButton
                  action = {reset}
                  type="button"           
                  child='Clear form'
                />
              </div>

    </form>
  }

  const selector = formValueSelector('order');

  DishForm = connect(state => {
    const dishType = selector(state, 'type');
    return {
      dishType
    };
  })(DishForm);


  export default reduxForm({ form: 'order', destroyOnUnmount: false, validate })(DishForm)