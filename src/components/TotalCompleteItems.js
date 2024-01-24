import React from 'react';
import '../styles/TotalCompleteItems.scss'
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {

	const CompletedTodo = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)
	);

	return(
		<div className='CompleteBox'>
			<h4 className='TotalComplete'>Total Completed Items: {CompletedTodo.length}</h4>
		</div>
	);
};

export default TotalCompleteItems;
