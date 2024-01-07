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
    return (
        <div className="to-do-list">

            <h1>To-Do-List</h1>

            <div>
                <input type="text" 
                       placeholder="Enter a task..."
                       value={newTask}

                />
            </div>

        </div>
    );
    
}

export default ToDoList