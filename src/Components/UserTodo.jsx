import { useState, useEffect } from "react";

const UserTodo = ({ todo, callback }) => {
	const [isCompleted, setIsCompleted] = useState(todo.completed);

	useEffect(() => {
		todo.completed = isCompleted;
		callback.markCompleted(todo);
	}, [isCompleted]);

	return (
		<li className="todo-item">
			<div style={{ backgroundColor: isCompleted ? "#7ee98b" : "#f09494" }}>
				<p>Title: {todo.title}</p>
				<p>Completed: {isCompleted ? "True" : "False"}</p>
				{!isCompleted && (
					<button onClick={() => setIsCompleted(true)}>Mark Completed</button>
				)}
			</div>
		</li>
	);
};

export default UserTodo;
