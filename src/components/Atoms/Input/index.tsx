import React from 'react';
import styled from 'styled-components';

type InputProps = {
    placeholder?: string;
    value?: string;
    width?: number;
    height?: number;
    backgroundColor?: string;
    textColor?: string;
    onClick?: () => void;
    onChange?: (value: string) => void; 
}

const Input: React.FC<InputProps> = (props) => {
    const { placeholder = '',
            value = '', 
            width,
            height,
            backgroundColor,
            textColor,
            onClick = () => {},
            onChange = () => {},
        } = props;

    return (
        <StyledInput    type='text'
                        value={value}
                        placeholder={placeholder}
                        width={width}
                        height={height}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        onClick={()=>{onClick}}
                        onChange={(e)=>{onChange(e.target.value)}}/>
    );
}

type StyledInputProps = {
    width?: number;
    height?: number;
    backgroundColor?: string;
    textColor?: string;
}

const StyledInput = styled.input<StyledInputProps>((props) => `
    width: ${props.width ? props.width + 'px' : '100%'};
    width: ${props.height ? props.height + 'px' : '100%'};
    background-color: ${props.backgroundColor ? props.backgroundColor : '#d2d2d2'};
    color: ${props.textColor ? props.textColor : '#0a0a0a'};
`);

export default Input;