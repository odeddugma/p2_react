import { useState } from "react";

const AddTodo = (props) => {
	const [todo, setTodo] = useState({
		userId: props.user.id,
		title: "",
		completed: false,
	});

	const handleCancelClick = () => {
		props.callback.changeAddTodoDisplayState(!props.addTodoState);
	};

	const handleAddClick = () => {
		props.callback.addTodo(props.user.id, todo);
	};

	return (
		<div className="add-container">
			<div className="add-form">
				<p>
					Title:{" "}
					<input
						type="text"
						onInput={(e) => setTodo({ ...todo, title: e.target.value })}
					/>
				</p>
				<div className="text-align-end">
					<button className="btn-yellow" onClick={handleCancelClick}>
						Cancel
					</button>
					<button className="btn-yellow" onClick={handleAddClick}>
						Add
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddTodo;
