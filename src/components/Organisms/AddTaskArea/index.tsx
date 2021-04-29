import React, { useState } from 'react';
import InputForm from '../../Molecules/InputForm';

type AddTaskAreaProps = {

}

const AddTaskArea: React.FC<AddTaskAreaProps> = (props) => {
    const {} = props;
    const [ newTask, setNewTask ] = useState("");
    
    const onChangeInput = (value: string) => {

    }

    const onSubmit = () => {
        
    }

    return (
        <InputForm  width={300}
                    height={50}
                    onChange={onChangeInput}
                    value={newTask}
                    placeholder='タスク名を入力'
                    onSubmit={onSubmit}/>
    );
}