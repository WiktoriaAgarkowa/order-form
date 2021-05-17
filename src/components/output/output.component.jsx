import React from 'react';
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import './output.styles.scss';

let Output = ({name, type, time, slices, diameter, spice, slices_bread}) => {

    return(
        <div className="output-container">

            <h1>Your current order</h1>
            <span>Dish name: {name}</span>
            <span>Type of dish: {type}</span>
            <span>Preparation time: {time}</span>
            {slices ? <span>Number of slices: {slices}</span> : null}
            {diameter ? <span>Diameter: {diameter}</span> : null}
            {spice ? <span>Spice: {spice}</span> : null}
            {slices_bread ? <span>Slices of bread: {slices_bread}</span> : null}
                    
        </div>
    )
}

const mapStateToProps = state => ({
    name: formValueSelector('order')(state, 'name'),
    type: formValueSelector('order')(state, 'type'),
    time: formValueSelector('order')(state, 'preparation_time'),
    slices: formValueSelector('order')(state, 'no_of_slices'),
    diameter: formValueSelector('order')(state, 'diameter'),
    spice: formValueSelector('order')(state, 'spiceness_scale'),
    slices_bread: formValueSelector('order')(state, 'slices_of_bread'),
  })
  
  Output = connect(
    mapStateToProps
  )(Output)
  

export default Output;