import { useState } from "react";

const AddUser = (props) => {
	const [user, setUser] = useState({ name: "", email: "" });

	const handleCancelClick = () => {
		props.callback.changeAddUserDisplayState(false);
	};

	const handleAddClick = () => {
		props.callback.addUser(user);
	};

	return (
		<div>
			<p>Add new user</p>
			<p>
				Name:{" "}
				<input
					type="text"
					onInput={(e) => setUser({ ...user, name: e.target.value })}
				/>
			</p>
			<p>
				Email:{" "}
				<input
					type="email"
					onInput={(e) => setUser({ ...user, email: e.target.value })}
				/>
			</p>
			<button onClick={handleCancelClick}>Cancel</button>
			<button onClick={handleAddClick}>Add</button>
		</div>
	);
};

export default AddUser;
