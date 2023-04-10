import React from "react";

const UserTodo = ({ todo }) => {
	return (
		<li className="todo-item">
			<div style={{ backgroundColor: todo.completed ? "#7ee98b" : "#f09494" }}>
				<p>Title: {todo.title}</p>
				<p>Completed: {todo.completed.toString()}</p>
			</div>
		</li>
	);
};

export default UserTodo;
