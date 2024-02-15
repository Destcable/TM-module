import React from "react";
import InputMask from "react-input-mask";

interface ITextFieldProps {
    mask?: string
    maxLength?: number
}

const TextField: React.FC<ITextFieldProps> = (props) => {
    const { maxLength, mask = '' } = props;

    return <InputMask 
        mask={mask}
        maskChar='_' 
        maxLength={maxLength} />  
};

export default TextField;