import { useState } from "react";

const User = ({ user, callback }) => {
	const [data, setData] = useState({});

	//TODO: Remove after testing
	if (user.id === 2) {
		user.todos.map((todo) => (todo.completed = true));
	}

	const haveUncompletedTask = user.todos.some(
		(todo) => todo.completed === false
	);

	const color = haveUncompletedTask ? "red" : "green";

	const deleteUser = (id) => {
		console.log("deleteUser " + id);
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
				Email: <input type="email" placeholder={user.email} />
			</p>
			<div>
				<button onClick={() => deleteUser(user.id)}>Delete</button>
			</div>
		</article>
	);
};

export default User;