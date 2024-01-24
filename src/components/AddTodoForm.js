import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import '../styles/AddTodoForm.scss'

const AddTodoForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		
		// Trim the value to remove leading and trailing whitespaces
		const trimmedValue = value.trim();

		// Check if the trimmed value is not empty
		if (trimmedValue !== '') {
		  dispatch(
			addTodo({
			  title: trimmedValue,
			})
		  );
		  setValue('');
		} else {
		  alert('Please enter a task.');
		}
	};

	return (
		<div>
			<form className='Main' onSubmit={onSubmit}>
				<label className='label'>Enter a Task: </label>
				<input type='text' className='input' value={value} onChange={(e) => setValue(e.target.value)}/>
				<button className='todo-button' type='submit' >Add</button>
			</form>
    	</div>
	);
};

export default AddTodoForm;
