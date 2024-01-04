import React from 'react';
import TodoItem from './TodoItem';
import '../styles/todolist.css'
import { useSelector } from 'react-redux';

const TodoList = () => {

	const todos = useSelector((state) => state.todos);

	return (
		<ul className='Box'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
