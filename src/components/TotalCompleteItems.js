import React from 'react';
import '../styles/TotalCompleteItems.css'
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {

	const CompletedTodo = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)
	);

	return(
		<div className='CompleteBox'>
			<h4 className='TotalComplete'>Total Complete Items: {CompletedTodo.length}</h4>
		</div>
	);
};

export default TotalCompleteItems;
