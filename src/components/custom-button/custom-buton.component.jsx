import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ child }) => (
    <div>
        <button>
            {child}
        </button>
    </div>
)

export default CustomButton;