import React from 'react';
import './custom-button.styles.scss';

const CustomButton = (props) => {
    console.log(props)
    const { child, reset } = props;

    return (
    <div>
        <button onClick={reset}>
            {child}
        </button>
    </div>
)}

export default CustomButton;