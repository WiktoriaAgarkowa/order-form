import React from 'react';

import './button.styles.scss';

const CustomButton = (props) => {

    const { child, action, type } = props;

    return (
    <div>
        <button
        onClick = {action} 
            className="custom-button" 
            type={type}>
            {child}
        </button>
    </div>
)}

export default CustomButton;