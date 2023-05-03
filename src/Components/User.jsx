import { useEffect, useState } from "react";

const User = ({ user, callback }) => {
	const [currentUser, setCurrentUser] = useState(user);
	const [showOtherData, setShowOtherData] = useState(false);
	const [isSelected, setIsSelected] = useState(false);
	const [color, setColor] = useState("");

	useEffect(() => {
		if (currentUser.todos.some((todo) => todo.completed === false)) {
			setColor("red");
		} else {
			setColor("green");
		}
	}, [currentUser]);

	useEffect(() => {
		if (!isSelected) return callback.showUserPostsAndTodos({});

		callback.showUserPostsAndTodos(currentUser);
	}, [isSelected]);

	const updateUser = () => {
		callback.updateUser(currentUser);
	};

	const deleteUser = (id) => {
		callback.deleteUser(id);
	};

	return (
		<article
			className={`userItem ${isSelected ? "selected" : ""}`}
			style={{ borderColor: color }}
		>
			<p onClick={() => setIsSelected(!isSelected)}>ID: {user.id}</p>
			<p>
				Name:{" "}
				<input
					type="text"
					placeholder={user.name}
					onInput={(e) =>
						setCurrentUser({ ...currentUser, name: e.target.value })
					}
				/>
			</p>
			<p>
				Email:{" "}
				<input
					type="email"
					placeholder={currentUser.email}
					onInput={(e) =>
						setCurrentUser({ ...currentUser, email: e.target.value })
					}
				/>
			</p>

			<div>
				<button
					onMouseOver={() => setShowOtherData(true)}
					onClick={() => setShowOtherData(false)}
				>
					Other Data
				</button>
				<button onClick={updateUser}>Update User</button>
				<button onClick={() => deleteUser(currentUser.id)}>Delete</button>
			</div>

			{showOtherData && (
				<div className="other-data-container">
					<p>
						Street:{" "}
						<input
							type="text"
							placeholder={currentUser.address.street}
							onInput={(e) =>
								setCurrentUser({
									...currentUser,
									address: {
										...currentUser.address,
										street: e.target.value,
									},
								})
							}
						/>
					</p>
					<p>
						City:{" "}
						<input
							type="text"
							placeholder={currentUser.address.city}
							onInput={(e) =>
								setCurrentUser({
									...currentUser,
									address: { ...currentUser.address, city: e.target.value },
								})
							}
						/>
					</p>
					<p>
						Zip Code:{" "}
						<input
							type="text"
							placeholder={currentUser.address.zipcode}
							onInput={(e) =>
								setCurrentUser({
									...currentUser,
									address: {
										...currentUser.address,
										zipcode: e.target.value,
									},
								})
							}
						/>
					</p>
				</div>
			)}
		</article>
	);
};

export default User;
