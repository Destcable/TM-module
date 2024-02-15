import React from "react";
import InputMask from "react-input-mask";

interface IPasswordField { 
    maxLength?: number
}   

const PasswordField: React.FC<IPasswordField> = (props) => {
    const { maxLength } = props;

    return <InputMask 
        type='password' 
        mask='' 
        maxLength={maxLength}
    />
};

export default PasswordField;