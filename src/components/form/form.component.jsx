import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// import { apiRequest } from '../../redux/form/form.action';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-buton.component';

import './form.styles.scss';


let DishForm = props => {
  // console.log(props)

    const { handleSubmit, dishType, reset} = props;

    const options = ['pizza', 'soup', 'sandwich'];

    return <form onSubmit={handleSubmit}>
                    <CustomInput
                    className='dish-name'
                    label='Dish Name' 
                    name='name'
                    component='input'
                    type='text'
                    placeholder='Dish Name'
                    />

                    <CustomInput
                    className='preparation-time'
                    label='Preparation time' 
                    name='preparation_time'
                    component='input'
                    type='time'
                    step="1"
                    />

                    <CustomInput
                    className='type'
                    label='Dish type' 
                    name='type'
                    component='select'
                    options = {options}
                    />

                    {dishType === 'pizza' ? <CustomInput
                    className='number'
                    label='Number of slices' 
                    name='no_of_slices'
                    component='input'
                    type='number'
                    min='1'
                    placeholder='0'
                    /> : null}

                    {dishType === 'pizza' ? <CustomInput
                    className='float'
                    label='Diameter' 
                    name='diameter'
                    component='input'
                    type='number'
                    min='15'
                    placeholder='cm'
                    /> : null} 

                    {dishType === 'soup' ? <CustomInput
                    className='range'
                    label='Spiciness' 
                    name='spiciness_scale'
                    component='input'
                    type='range'
                    min='1'
                    max='10'
                    /> : null}

                    {dishType === 'sandwich' ? <CustomInput
                    className='number'
                    label='Slices of bread' 
                    name='slices_of_bread'
                    component='input'
                    type='number'
                    min='2'
                    placeholder='2'
                    /> : null}

                    <CustomButton
                    reset = {reset}
                    type="submit"           
                    child='Make an order!'
                    />
    </form>
  }

  const mapStateToProps = (state) => ({
    dishType: state.stateFromReducer.typeOfDish
  }); 

  // const mapDispatchToProps = dispatch => ({
  //   apiRequest: () => dispatch(apiRequest())
  // })

  export default connect(mapStateToProps)(reduxForm({ form: 'order' })(DishForm))