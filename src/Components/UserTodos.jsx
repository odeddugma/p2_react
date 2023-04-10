import React from "react";
import UserTodo from "./UserTodo";

const UserTodos = ({ id, todos }) => {
	return (
		<div>
			<h5>Todos - User {id}</h5>
			<ul className="todos-list">
				{todos.map((todo) => (
					<UserTodo key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
};

export default UserTodos;
