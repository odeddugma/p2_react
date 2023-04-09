import { useState, useEffect } from "react";

const Search = ({ users, callback }) => {
	const [matches, setMatches] = useState([]);
	const [search, setSearch] = useState("");

	/* useEffect(() => {
		setMatches(users);
	}, []); */

	useEffect(() => {
		const matchedUsers = [...users];
		const matchedUsersX = matchedUsers.filter((user) =>
			user.name.toLowerCase().includes(search)
		);
		setMatches(matchedUsersX);
	}, [search]);

	useEffect(() => {
		callback.searchUser(matches);
	}, [matches]);

	return (
		<div>
			<p>
				Search:{" "}
				<input
					type="text"
					placeholder="Search"
					onInput={(e) => setSearch(e.target.value.toLowerCase())}
				/>
			</p>
		</div>
	);
};

export default Search;
