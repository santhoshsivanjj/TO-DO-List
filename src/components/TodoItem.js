// TodoItem.js

import React, { useState } from 'react';
import '../styles/TodoItem.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../redux/todoSlice';
import UpdateTodoForm from './UpdateTodoForm'; // Import the new component

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const [isUpdateFormOpen, setUpdateFormOpen] = useState(false);

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleUpdateClick = () => {
    setUpdateFormOpen(true);
  };

  const handleCloseUpdateForm = () => {
    setUpdateFormOpen(false);
  };

  return (
    <div className={`TaskList ${completed ? 'TaskListComplete' : ''}`}>
      <div className='TaskBox'>
        <span className='Icon'>
          <input
            type='checkbox'
            className='mr-3'
            onChange={handleCompleteClick}
            checked={completed}
          />
          {title}
        </span>
        {!isUpdateFormOpen && (
        <button onClick={handleUpdateClick} className='UpdateButton'>Update</button>
        )}
        <button onClick={handleDeleteClick} className='DeleteButton'>Delete</button>
      </div>
      {isUpdateFormOpen && (
        <UpdateTodoForm id={id} currentTitle={title} onClose={handleCloseUpdateForm} />
      )}
    </div>
  );
};

export default TodoItem;
