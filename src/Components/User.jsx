import { useEffect, useState } from "react";

const User = (props) => {
	const [currentUserData, setCurrentUserData] = useState(props.user);
	const [showOtherData, setShowOtherData] = useState(false);
	const [isSelected, setIsSelected] = useState(false);
	const [haveUncompletedTask, setHaveUncompletedTask] = useState(false);

	/* 	//TODO: Remove after testing
	if (currentUserData.id === 1) {
		currentUserData.todos.map((todo) => (todo.completed = true));
		currentUserData.todos[0].completed = false;
	} */

	//Check for uncompleted tasks
	/* const haveUncompletedTask = user.todos.some(
		(todo) => todo.completed === false
	); */

	useEffect(() => {
		if (currentUserData.todos.some((todo) => todo.completed === false)) {
			setHaveUncompletedTask(true);
		}
	}, [props]);

	//const color = haveUncompletedTask ? "red" : "green";

	const updateteUser = () => {
		props.callback.updateUser(currentUserData);
	};

	const deleteUser = (id) => {
		props.callback.deleteUser(id);
	};

	useEffect(() => {
		if (!isSelected) return props.callback.showUserPostsAndTodos({});
		props.callback.showUserPostsAndTodos(currentUserData);
	}, [isSelected]);

	useEffect(() => {
		setCurrentUserData(props.user);
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
					placeholder={currentUserData.email}
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
				<button onClick={() => deleteUser(currentUserData.id)}>Delete</button>
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
							placeholder={currentUserData.address.zipcode}
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
