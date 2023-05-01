import { useEffect, useState } from "react";
import UserTodo from "./UserTodo";

const TodosList = (props) => {
	const { id, todos, callback } = props;
	const [addTodoState, setAddTodoState] = useState(props.addTodoState);

	useEffect(() => {
		callback.todoState(addTodoState);
	}, [addTodoState]);

	return (
		<div>
			<h5>Todos - User {id}</h5>
			<button onClick={() => setAddTodoState(true)}>ADD</button>
			<ul className="todos-list">
				{todos.map((todo) => (
					<UserTodo
						key={todo.id}
						todo={todo}
						callback={callback}
						addTodoState={addTodoState}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodosList;
