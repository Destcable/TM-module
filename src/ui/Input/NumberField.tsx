import React from 'react';
import InputMask from 'react-input-mask';

const NumberField: React.FC = () => { 
    return <InputMask mask='999' maskChar='_' style={{ width: '4ch'}} />
};

export default NumberField;