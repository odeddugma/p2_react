import { useState, useEffect } from "react";

const Search = ({ users, callback }) => {
	const [matches, setMatches] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const usersCopy = [...users];
		const matchedUsers = usersCopy.filter(
			(user) =>
				user.name.toLowerCase().includes(search) ||
				user.email.toLowerCase().includes(search)
		);
		setMatches(matchedUsers);
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
