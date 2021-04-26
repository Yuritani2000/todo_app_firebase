import styled from 'styled-components';

type FlexBoxProps = {
    flexDirection?: string;
}

export const FlexBox = styled.div<FlexBoxProps>((props) => `
    display: flex
    flex-direction: ${props.flexDirection ? props.flexDirection : 'row'};
`);