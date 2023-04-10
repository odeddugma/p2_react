import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";

const usersURL = "https://jsonplaceholder.typicode.com/users";
const todosURL = "https://jsonplaceholder.typicode.com/todos/";
const postsURL = "https://jsonplaceholder.typicode.com/posts";

function App() {
	const [users, setUsers] = useState([]);
	const [displayedUsers, setDisplayedUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState({});

	useEffect(() => {
		const getUsersAndData = async () => {
			const users = (await axios.get(usersURL)).data;
			const todos = (await axios.get(todosURL)).data;
			const posts = (await axios.get(postsURL)).data;

			for (const user of users) {
				user.todos = [];
				for (const todo of todos) {
					if (todo.userId === user.id) {
						user.todos.push(todo);
					}
				}
				user.posts = [];
				for (const post of posts) {
					if (post.userId === user.id) {
						user.posts.push(post);
					}
				}
			}
			setUsers(users);
		};

		getUsersAndData();
	}, []);

	useEffect(() => {
		setDisplayedUsers(users);
	}, [users]);

	const getDataFromChild = {
		searchUser: (matchedUsers) => {
			setDisplayedUsers(matchedUsers);
		},
		deleteUser: (id) => {
			const newUsersList = users.filter((user) => user.id !== id);
			setUsers(newUsersList);
		},
		updateUser: (updateUser) => {
			const userIndex = users.findIndex((user) => user.id === updateUser.id);
			users[userIndex] = updateUser;
			const newUsersList = [...users];
			setUsers(newUsersList);
		},
		showUserPostsAndTodos: (user) => {
			setSelectedUser(user);
		},
	};

	return (
		<div className="App">
			<Main
				users={users}
				displayedUsers={displayedUsers}
				callback={getDataFromChild}
			/>
			{selectedUser.id && <Sidebar user={selectedUser} />}
		</div>
	);
}

export default App;
