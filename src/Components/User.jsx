import { useState } from "react";

const User = ({ user, callback }) => {
	const [currentUserData, setCurrentUserData] = useState(user);
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
		callback.updateUser(currentUserData);
	};

	const deleteUser = (id) => {
		callback.deleteUser(id);
	};

	return (
		<article
			style={{ border: "1px solid", borderColor: color }}
			className="userItem"
		>
			<p>ID: {currentUserData.id}</p>
			<p>
				Name:{" "}
				<input
					type="text"
					placeholder={currentUserData.name}
					onInput={(e) =>
						setCurrentUserData({ ...currentUserData, name: e.target.value })
					}
				/>
			</p>
			<p>
				Email:{" "}
				<input
					type="email"
					placeholder={user.email}
					onInput={(e) =>
						setCurrentUserData({ ...currentUserData, email: e.target.value })
					}
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
						Street:{" "}
						<input
							type="text"
							placeholder={currentUserData.address.street}
							onInput={(e) =>
								setCurrentUserData({
									...currentUserData,
									address: {
										...currentUserData.address,
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
							placeholder={currentUserData.address.city}
							onInput={(e) =>
								setCurrentUserData({
									...currentUserData,
									address: { ...currentUserData.address, city: e.target.value },
								})
							}
						/>
					</p>
					<p>
						Zip Code:{" "}
						<input
							type="text"
							placeholder={user.address.zipcode}
							onInput={(e) =>
								setCurrentUserData({
									...currentUserData,
									address: {
										...currentUserData.address,
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
