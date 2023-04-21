import { useState } from "react";

const AddTodo = (user, callback, addTodo) => {
	const [todos, setTodos] = useState(user.todos);
	const [addTodoState, setAddTodoState] = useState(false);

	const handleAddClick = () => {};

	return (
		<div>
			<p>
				Title:{" "}
				<input
					type="text"
					onInput={(e) => setTodos([todos, ...e.target.value])}
				/>
			</p>
			<button>Cancel</button>
			<button onClick={handleAddClick}>Add</button>
		</div>
	);
};

export default AddTodo;
