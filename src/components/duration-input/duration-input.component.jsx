import React, { useState } from 'react';

import TimeField from 'react-simple-timefield';

import './duration-input.styles.scss';

function DurationInput () {
  const [ time, setTime ] = useState('00:00:00')
 
  return (
    <TimeField value={time} onChange={() => setTime(time)} showSeconds/>
  
  )}

export default DurationInput;