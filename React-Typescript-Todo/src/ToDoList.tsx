import React, { useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    function addTask() {
        setTasks([...tasks, newTask]);
        setNewTask('');
    }

    function deleteTask(index: number) {
    }

    function moveTaskUp(index: number) {
    }
    function moveTaskDown(index: number) {
    }
    return (<></>);
    
}

export default ToDoList