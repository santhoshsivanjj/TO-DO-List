import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/todoSlice';
import '../styles/UpdateTodoForm.scss'

const UpdateTodoForm = ({ id, currentTitle, onClose }) => {
  const [newTitle, setNewTitle] = useState(currentTitle);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTitle = newTitle.trim();

    if (trimmedNewTitle !== '') {
      dispatch(updateTodo({ id, title: trimmedNewTitle }));
      onClose();
    } else {
      alert('Please Enter a Task.');
    }
  };

  return (
    <form className='Update' onSubmit={handleSubmit}>
      <div className='UptLab'>
        <label className='UpdateLabel' htmlFor={`updateTodo-${id}`}>Update Task: </label>
        <input className='UpdateInput'
          type='text'
          id={`updateTodo-${id}`}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </div>
      <div>
        <button className='UpdateButton' type='submit'>Update</button>
      </div>  
    </form>
  );
};

export default UpdateTodoForm;
