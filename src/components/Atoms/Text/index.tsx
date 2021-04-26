import { Serializer } from 'node:v8';
import React from 'react';
import styled from 'styled-components';

type TextProps = {
    text?: string;
    size?: number;
    backgroundColor?: string;
    textColor?: string;
    onClick?: () => void;
}

const Text: React.FC<TextProps> = (props) => {
    const { text, 
            size,
            backgroundColor,
            textColor,
            onClick = ()=> {},
        } = props;

    return (
        <StyledText   
                        size={size}
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        onClick={()=>{onClick}}>
                            {text}
        </StyledText>
    );
}

type StyledTextProps = {
    size?: number;
    backgroundColor?: string;
    textColor?: string;
}

const StyledText = styled.div<StyledTextProps>((props) => `
    size: ${props.size ? props.size + 'px' : '1.5em'};
    background-color: ${props.backgroundColor ? props.backgroundColor : '#d2d2d2'};
    color: ${props.textColor ? props.textColor : '#0a0a0a'};
`);

export default Text;