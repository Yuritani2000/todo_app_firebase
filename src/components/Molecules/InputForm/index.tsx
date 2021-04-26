import React from 'react';
import Input from '../../Atoms/Input';
import Button from '../../Atoms/Button';
import { FlexBox } from './StyledComponents';

type InputFormProps = {
    width?: number;
    height?: number;
    onChange?: (value: string) => void;
    value?: string;
    placeholder?: string;
    onSubmit?: () => void;
} 

const InputForm: React.FC<InputFormProps> = (props) => {
    const { width,
            height,
            onChange = (value: string) => {},
            value = '',
            placeholder = '',
            onSubmit = () => {},
        } = props;

    return (
        <FlexBox>
            <Input  width={width}
                    height={height}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}/>
            <Button width={30}
                    text='追加'
                    onClick={onSubmit}/>
        </FlexBox>
    );
}

export default InputForm;