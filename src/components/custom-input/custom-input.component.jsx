import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { addDishType } from '../../redux/form/form.action';

import './custom-input.styles.scss';

const CustomInput = ({label, name, component, type, placeholder, min, options, addDishType, stateNew, step, max, ...otherProps}) => { 
 
    return (
    <div className='input-container'>
        <label className='label' htmlFor={name}>{label}</label>
        {component === 'input' ? <Field
        className='custom-input' 
        name={name}
        component={component}
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        required
        />
        :
        <Field
        className='custom-input'  
        name={name}
        component={component}
        value=''
        onChange={(e,newValue) => addDishType(newValue)} required>
            <option value='placeholder'>Choose type of dish...</option>
            {options.map(option => <option value={option} key={option}>{option}</option>)}
        </Field >}
    </div>
)
}

const mapDispatchToProps = dispatch => ({
    addDishType: (dish) => dispatch(addDishType(dish))
})

export default connect(null, mapDispatchToProps)(CustomInput);