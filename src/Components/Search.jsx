import { useState, useEffect } from "react";

const Search = ({ users, callback }) => {
	//const [currentUsers, setCurrentUsers] = useState([]);
	const [matches, setMatches] = useState([]);

	/* 	useEffect(() => {
		setCurrentUsers(users);
	}, [users]); */

	useEffect(() => {
		callback.searchUser(matches);
	}, [matches]);

	const search = (e) => {
		const searchedName = e.target.value;
		setMatches(users.filter((user) => user.name == searchedName));
	};

	return (
		<div>
			<p>
				Search: <input type="text" placeholder="Search" onInput={search} />
			</p>
		</div>
	);
};

export default Search;
