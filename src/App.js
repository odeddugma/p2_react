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
	const [searchedUsers, setSearchedUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState({});
	const [addTodoState, setAddTodoState] = useState(false);
	const [addPostState, setAddPostState] = useState(false);

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

			// Order by user id
			users.sort((a, b) => a.id - b.id);

			setUsers(users);
		};

		getUsersAndData();
	}, []);

	useEffect(() => {
		if (searchedUsers.length > 0) {
			setDisplayedUsers(searchedUsers);
		} else {
			setDisplayedUsers(users);
		}
	}, [users, searchedUsers]);

	useEffect(() => {
		if (selectedUser.id) {
			const selectedUserIndex = users.findIndex(
				(user) => user.id === selectedUser.id
			);
			setSelectedUser(users[selectedUserIndex]);
		}
	}, [users]);

	const getDataFromChild = {
		searchUser: (matchedUsers) => {
			setSearchedUsers(matchedUsers);
		},
		deleteUser: (id) => {
			const newUsersList = users.filter((user) => user.id !== id);
			setUsers(newUsersList);
		},
		updateUser: (updateUser) => {
			const newUsersList = [...users];
			const userIndex = newUsersList.findIndex(
				(user) => user.id === updateUser.id
			);
			newUsersList[userIndex] = updateUser;
			setUsers(newUsersList);
		},
		showUserPostsAndTodos: (user) => {
			setSelectedUser(user);
		},
		markCompleted: (updateTodo) => {
			const newUsersList = [...users];
			const userIndex = newUsersList.findIndex(
				(user) => user.id === updateTodo.userId
			);
			const todoIndex = newUsersList[userIndex].todos.findIndex(
				(todo) => todo.id === updateTodo.id
			);
			newUsersList[userIndex].todos[todoIndex] = updateTodo;
			setUsers(newUsersList);
		},
		addTodo: (userId, todo) => {
			const newUsersList = [...users];
			const userIndex = newUsersList.findIndex((user) => user.id === userId);
			const todoId = newUsersList[userIndex].todos.push(todo);
			todo.id = todoId;
			setUsers(newUsersList);
			setAddTodoState(false);
		},
		changeAddTodoDisplayState: (state) => {
			setAddTodoState(state);
		},
		addPost: (userId, post) => {
			const newUsersList = [...users];
			const userIndex = newUsersList.findIndex((user) => user.id === userId);
			const postId = newUsersList[userIndex].posts.push(post);
			post.id = postId;
			setUsers(newUsersList);
			setAddPostState(false);
		},
		changeAddPostDisplayState: (state) => {
			setAddPostState(state);
		},
	};

	return (
		<div className="App">
			<Main
				users={users}
				displayedUsers={displayedUsers}
				callback={getDataFromChild}
			/>
			{selectedUser.id && (
				<Sidebar
					user={selectedUser}
					addTodoState={addTodoState}
					addPostState={addPostState}
					callback={getDataFromChild}
				/>
			)}
		</div>
	);
}

export default App;
