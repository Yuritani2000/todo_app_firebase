import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
    text?: string;
    width?: number;
    height?: number;
    backgroundColor?: string;
    textColor?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { text, 
            width,
            height,
            backgroundColor,
            textColor,
            onClick,
        } = props;

    return (
        <StyledButton   value={text}
                        width={width}
                        height={height}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        onClick={()=>{onClick}}/>
    );
}

type StyledButtonProps = {
    width?: number;
    height?: number;
    backgroundColor?: string;
    textColor?: string;
}

const StyledButton = styled.button<StyledButtonProps>((props) => `
    width: ${props.width ? props.width + 'px' : '100%'};
    width: ${props.height ? props.height + 'px' : '100%'};
    background-color: ${props.backgroundColor ? props.backgroundColor : '#d2d2d2'};
    color: ${props.textColor ? props.textColor : '#0a0a0a'};
    cursor: pointer;
`);

export default Button;