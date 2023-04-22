import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import UserTodo from "./UserTodo";
import TodosList from "./TodosList";

const UserTodos = (props) => {
	const [user, setUser] = useState(props.user);
	const [addTodoState, setAddTodoState] = useState(props.addTodoState);

	useEffect(() => {
		console.log(addTodoState);
		setAddTodoState(props.addTodoState);
	}, [props]);

	return (
		<div>
			{addTodoState ? (
				<AddTodo
					user={user}
					addTodoState={addTodoState}
					callback={props.callback}
				/>
			) : (
				<TodosList
					id={user.id}
					todos={user.todos}
					callback={props.callback}
					addTodoState={addTodoState}
				/>
			)}
		</div>
	);
};

export default UserTodos;
