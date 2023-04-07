import React from "react";

const User = ({ user }) => {
	//TODO: Remove after testing
	if (user.id === 2) {
		user.todos.map((todo) => (todo.completed = true));
	}

	const haveUncompletedTask = user.todos.some(
		(todo) => todo.completed === false
	);

	const color = haveUncompletedTask ? "red" : "green";

	return (
		<article
			style={{ border: "1px solid", borderColor: color }}
			className="userItem"
		>
			<p>ID: {user.id}</p>
			<p>
				Name: <input type="text" placeholder={user.name} />
			</p>
			<p>
				Email: <input type="email" placeholder={user.email} />
			</p>
		</article>
	);
};

export default User;
