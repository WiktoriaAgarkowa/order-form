import React from 'react';
import {buttonStyle} from './buttonStyle';

const CustomButton = (props) => {

    const { child } = props;

    return (
    <div>
        <button
        style={buttonStyle} 
        type="submit">
            {child}
        </button>
    </div>
)}

export default CustomButton;