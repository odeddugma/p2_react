import { useEffect, useState } from "react";
import UserTodo from "./UserTodo";

const TodosList = (props) => {
	const { id, todos, callback } = props;
	const [addTodoState, setAddTodoState] = useState(props.addTodoState);

	useEffect(() => {
		callback.changeAddTodoDisplayState(addTodoState);
	}, [addTodoState]);

	return (
		<div>
			<div className="sidebar-top-strip">
				<h5>Todos - User {id}</h5>
				<button className="btn-yellow" onClick={() => setAddTodoState(true)}>
					ADD
				</button>
			</div>
			<ul className="todos-list">
				{todos.map((todo) => (
					<UserTodo
						key={todo.id}
						todo={todo}
						//addTodoState={addTodoState}
						callback={callback}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodosList;
