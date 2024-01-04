import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TasksList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h2>All Tasks</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
};

export default TasksList;
