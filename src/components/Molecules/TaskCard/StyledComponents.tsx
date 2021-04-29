import styled from 'styled-components';

type ParentProps = {
    width?: number;
    height?: number;
    backgroundColor?: string;
}

export const Parent = styled.div<ParentProps>(props => `
    width: ${props.width ? props.width + 'px' : '100%'};
    width: ${props.height ? props.height + 'px' : '100%'};
    background-color: ${props.backgroundColor ? props.backgroundColor : '#d2d2d2'};
`);

type FlexBoxProps = {
    width?: number;
    height?: number;
    flexDirection?: string;
    alignItems?: string;
}

export const FlexBox = styled.div<FlexBoxProps>(props => `
    width: ${props.width ? props.width + 'px' : '100%'};
    width: ${props.height ? props.height + 'px' : '100%'};
    display: flex
    flex-direction: ${props.flexDirection ? props.flexDirection : 'row'};
    align-items: ${props.alignItems ? props.alignItems : 'center'} ;
`);