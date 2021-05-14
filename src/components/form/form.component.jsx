import React, { useState } from 'react';
import { reduxForm } from 'redux-form';

import CustomInput from '../custom-input/custom-input.component';
import DurationInput from '../duration-input/duration-input.component';
import CustomButton from '../custom-button/custom-buton.component';

import './form.styles.scss';


let DishForm = props => {
    const [type, setType] = useState('')
    const { handleSubmit } = props;

    return <form onSubmit={handleSubmit}>
        <CustomInput
                    className='dish-name'
                    label='Dish Name' 
                    name='dishName'
                    component='input'
                    type='text'
                    placeholder='Dish Name'
                    />

                    <DurationInput 
                    className='time'
                    name=' preparationTime'/>

                    <CustomInput
                    className='type'
                    label='Dish type' 
                    name='dishType'
                    component='select'
                  
                    />

                    {type === 'Pizza' ? <CustomInput
                    className='number'
                    label='Number of slices' 
                    name='numberOfSlices'
                    component='input'
                    type='number'
                    min='1'
                    placeholder='0'
                    /> : null}

                    {type === 'Pizza' ? <CustomInput
                    className='float'
                    label='Diameter' 
                    name='diameter'
                    component='input'
                    type='text'
                    placeholder='cm'
                    /> : null} 

                    {type === 'Soup' ? <CustomInput
                    className='range'
                    label='Spiciness' 
                    name='spiciness'
                    component='input'
                    type='range'
                    min='1'
                    max='10'
                    /> : null}

                    {type === 'Sandwich' ? <CustomInput
                    className='number'
                    label='Slices of bread' 
                    name='slicesOfBread'
                    component='input'
                    type='number'
                    min='2'
                    placeholder='2'
                    /> : null}

                    <CustomButton 
                    type="submit"
                    
                    child='Make an order!'/>
    </form>
  }

  DishForm = reduxForm({
    form: 'dish order'
  })(DishForm)


export default DishForm;