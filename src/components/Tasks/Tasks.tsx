import React, { useState } from "react";
import styled from "styled-components";

type Props = {
    name: string,
    number: number,
    boolean: boolean
}

export function Tasks () {
    const [task, setTask] = useState('');
    const [listTasks, setListTasks] = useState<string[]>([]);

    function handleForm(e: React.FormEvent) {
        e.preventDefault();
        
        setListTasks([...listTasks, task]);
        setTask('');
    }

    function deleteTask(index: number) {
        const auxArr = listTasks.filter((item, key) => index !== key) 

        setListTasks(auxArr);
    }   
    
    return (
        <>
            <form onSubmit={handleForm}>
                <Input 
                    placeholder="Write your task..."
                    type="text" 
                    value={task} 
                    onChange={(e) => { setTask(e.target.value) }} 
                    required
                />
            
                <Button>Ok</Button>
                
            </form>
                
                {
                    listTasks.length > 0 ? 
                        listTasks.map((task: string, index: number) => (
                            <Item key={index}>
                                {task}
                                <div onClick={() => deleteTask(index)}>❌</div>
                            </Item>
                        )
                    )
                    :
                    <></>
                }
        </>
    )
}

const Input = styled.input`
    height: 40px;
    width: 90%;

    margin-top: 25px;

    border-radius: 5px;

    padding-left: 10px;
`

const Button = styled.button`
    height: 35px;
    width: 7%;

    border-radius: 5px;

    margin-left: 5px;
`

const Item = styled.div`
    width: 98%;

    display: flex;
    justify-content: space-between;

    background-color: rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 4px;
    border-left: 5px solid #ffffff;
    margin-top: 15px;

    color: #ffffff;

    div {
        cursor: pointer;
    }
`