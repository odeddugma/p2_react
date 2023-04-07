import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const usersURL = "https://jsonplaceholder.typicode.com/users";
const todosURL = "https://jsonplaceholder.typicode.com/todos/";
const postsURL = "https://jsonplaceholder.typicode.com/posts";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		console.log("useEffect");

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

	return (
		<div className="App">
			<div>main</div>
			<div>side</div>
		</div>
	);
}

export default App;
