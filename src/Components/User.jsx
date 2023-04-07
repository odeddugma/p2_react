import { useState } from "react";

const User = ({ user, callback }) => {
	const [data, setData] = useState(user);
	const [showOtherData, setShowOtherData] = useState(false);

	//TODO: Remove after testing
	if (user.id === 2) {
		user.todos.map((todo) => (todo.completed = true));
	}

	const haveUncompletedTask = user.todos.some(
		(todo) => todo.completed === false
	);

	const color = haveUncompletedTask ? "red" : "green";

	const updateteUser = () => {
		callback.updateUser(data);
	};

	const deleteUser = (id) => {
		callback.deleteUser(id);
	};

	//console.log(data);

	return (
		<article
			style={{ border: "1px solid", borderColor: color }}
			className="userItem"
		>
			<p>ID: {user.id}</p>
			<p>
				Name:{" "}
				<input
					type="text"
					placeholder={user.name}
					onInput={(e) => setData({ ...user, name: e.target.value })}
				/>
			</p>
			<p>
				Email:{" "}
				<input
					type="email"
					placeholder={user.email}
					onInput={(e) => setData({ ...user, email: e.target.value })}
				/>
			</p>

			<div>
				<button
					onMouseOver={() => setShowOtherData(true)}
					onClick={() => setShowOtherData(false)}
				>
					Otehr Data
				</button>
				<button onClick={updateteUser}>Update</button>
				<button onClick={() => deleteUser(user.id)}>Delete</button>
			</div>

			{showOtherData && (
				<div className="other-data-container">
					<p>
						Street: <input type="text" placeholder={user.address.street} />
					</p>
					<p>
						City: <input type="text" placeholder={user.address.city} />
					</p>
					<p>
						Zip Code: <input type="text" placeholder={user.address.zipcode} />
					</p>
				</div>
			)}
		</article>
	);
};

export default User;
