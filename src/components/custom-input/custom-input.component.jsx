import React from 'react';
import { Field } from 'redux-form';

import './custom-input.styles.scss';

const CustomInput = ({label, name, component, type, placeholder, min, ...otherProps}) => { 
 
    return (
    <div>
        <label>{label}</label>
        {component === 'input' ? <Field 
        name={name}
        component={component}
        type={type}
        placeholder={placeholder}
        min={min}
        />
        :
        <Field 
        name={name}
        component={component}>
            <option value="Sandwich">Sandwich</option>
            <option value="Soup">Soup</option>
            <option value="Pizza">Pizza</option>
        </Field >}
    </div>
)
}
export default CustomInput;