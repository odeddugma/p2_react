import React from "react";
import UserTodo from "./UserTodo";

const TodosList = ({ id, todos, callback, addTodo }) => {
	return (
		<div>
			<h5>Todos - User {id}</h5>
			<button onClick={addTodo}>ADD</button>
			<ul className="todos-list">
				{todos.map((todo) => (
					<UserTodo
						key={todo.id}
						todo={todo}
						callback={callback}
						addTodo={addTodo}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodosList;
