import { useState } from "react";

const AddTodo = (props) => {
	const [todo, setTodo] = useState({
		userId: props.user.id,
		title: "",
		completed: false,
	});
	const [addTodoState, setAddTodoState] = useState(props.addTodoState);

	const handleCancelClick = () => {
		props.callback.todoState(!addTodoState);
	};

	const handleAddClick = () => {
		props.callback.addTodo(props.user.id, todo);
	};

	return (
		<div>
			<p>
				Title:{" "}
				<input
					type="text"
					onInput={(e) => setTodo({ ...todo, title: e.target.value })}
				/>
			</p>
			<button onClick={handleCancelClick}>Cancel</button>
			<button onClick={handleAddClick}>Add</button>
		</div>
	);
};

export default AddTodo;
