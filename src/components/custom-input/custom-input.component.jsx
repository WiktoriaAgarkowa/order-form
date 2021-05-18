import React from 'react';
import { Field } from 'redux-form';
import './custom-input.styles.scss';


const CustomInput = ({label, name, type, component, min, step, max, options, addDishType, ...otherProps}) => { 

    return (
    <div className='input-container'>

        {component !== 'select' ? <Field
        style={{border: 'none',
        borderBottom: '1px solid #ccc', 
        padding: '10px 5px', 
        margin: '10px 0', 
        cursor: 'pointer'}} 
        name={name} 
        component='input' 
        type={type} 
        min={min} 
        max={max} 
        step={step} 
        placeholder={label}
        required /> : null}

        {component === 'select' ? <Field 
        style={{border: 'none', 
        borderBottom: '1px solid #ccc', 
        padding: '10px 5px', 
        cursor: 'pointer'}}
        name={name} 
        component='select' 
        >
            <option value='choose type'>choose type</option>  
            {options.map(option => <option name={option} key={option} value={option}>{option}</option>)}
            
        </Field> : null}

    </div>
)};


export default CustomInput;