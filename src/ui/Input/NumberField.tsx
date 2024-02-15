import React from 'react';
import InputMask from 'react-input-mask';

const NumberField = () => { 
    return <InputMask mask='999' maskChar='_' style={{ width: '4ch'}} />
};

export default NumberField;