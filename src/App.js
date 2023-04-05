import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const usersURL = "https://jsonplaceholder.typicode.com/users";
const todosURL = "https://jsonplaceholder.typicode.com/todos";
const postsURL = "https://jsonplaceholder.typicode.com/posts";

function App() {
	const [users, setUsers] = useState([]);
	const [todos, setTodos] = useState([]);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		console.log("useEffect");
		const getUsers = async () => {
			const response = await axios.get(usersURL);
			setUsers(response.data);
		};
		const getTodos = async () => {
			const response = await axios.get(todosURL);
			setTodos(response.data);
		};
		const getPosts = async () => {
			const response = await axios.get(postsURL);
			setPosts(response.data);
		};
		getUsers();
		getTodos();
		getPosts();
	}, []);

	console.log("Render");
	return (
		<div className="App">
			<div>main</div>
			<div>side</div>
		</div>
	);
}

export default App;
