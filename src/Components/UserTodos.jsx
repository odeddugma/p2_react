import { useState } from "react";
import AddTodo from "./AddTodo";
import UserTodo from "./UserTodo";
import TodosList from "./TodosList";

const UserTodos = ({ user, callback }) => {
	const [addTodoState, setAddTodoState] = useState(false);

	const addTodo = () => {
		setAddTodoState(!addTodoState);
	};

	return (
		<div>
			{addTodoState ? (
				<AddTodo user={user} callback={callback} />
			) : (
				<TodosList
					id={user.id}
					todos={user.todos}
					callback={callback}
					addTodo={addTodo}
				/>
			)}
		</div>
	);
};

export default UserTodos;
