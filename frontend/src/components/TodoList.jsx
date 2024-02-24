import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Todo Items',
            completed: true
        },
        {
            id: 2,
            text: 'Budget Items',
            completed: false
        }
    ]);

    const [text, setText] = useState('');

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="todo-list" style={{ textAlign: 'center', marginTop: '20px' }}>
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                    style={{ marginBottom: '10px' }}
                />
            ))}
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                style={{ marginRight: '10px' }}
            />
            <button onClick={() => addTask(text)} style={{ marginBottom: '10px' }}>Add</button>
        </div>
    );
}

export default TodoList;