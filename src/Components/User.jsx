import { useEffect, useState } from "react";

const User = ({ user, callback }) => {
	const [currentUserData, setCurrentUserData] = useState(user);
	const [showOtherData, setShowOtherData] = useState(false);
	const [isSelected, setIsSelected] = useState(false);
	const [haveUncompletedTask, setHaveUncompletedTask] = useState(false);

	//TODO: Remove after testing
	if (user.id === 1) {
		user.todos.map((todo) => (todo.completed = true));
		user.todos[0].completed = false;
	}

	//Check for uncompleted tasks
	/* const haveUncompletedTask = user.todos.some(
		(todo) => todo.completed === false
	); */
	useEffect(() => {
		if (user.todos.some((todo) => todo.completed === false)) {
			setHaveUncompletedTask(true);
		}
	}, [user]);

	//const color = haveUncompletedTask ? "red" : "green";

	const updateteUser = () => {
		callback.updateUser(currentUserData);
	};

	const deleteUser = (id) => {
		callback.deleteUser(id);
	};

	useEffect(() => {
		if (!isSelected) return callback.showUserPostsAndTodos({});
		callback.showUserPostsAndTodos(user);
	}, [isSelected]);

	useEffect(() => {
		setCurrentUserData(user);
	});

	return (
		<article
			style={{
				margin: "5px 0",
				border: "2px solid",
				borderColor: haveUncompletedTask ? "red" : "green",
			}}
			className={`userItem ${isSelected ? "selected" : ""}`}
		>
			<p onClick={() => setIsSelected(!isSelected)}>ID: {currentUserData.id}</p>
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
