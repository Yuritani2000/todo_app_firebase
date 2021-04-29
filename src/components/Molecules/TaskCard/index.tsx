import React from 'react';
import Text from '../../Atoms/Text';
import Button from '../../Atoms/Button';
import { Parent, FlexBox } from './StyledComponents';

type TaskCardProps = {
    width?: number;
    height?: number;
    taskName?: string;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
    const { width,
            height,
            taskName } = props;
    return (
        <Parent width={width}
                height={height}>
            <FlexBox    flexDirection='row'
                        alignItems='center'>
                <Text   text={taskName}
                        backgroundColor='#fefefe'/>
            </FlexBox>
        </Parent>
    );
}