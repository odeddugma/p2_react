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
		<div className="add-container">
			<p>
				<b>Add new user</b>
			</p>

			<div className="add-form">
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

export default AddUser;
