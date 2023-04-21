import { useState, useEffect } from "react";
import Users from "./Users";
import Search from "./Search";

const Main = ({ users, displayedUsers, callback }) => {
	const [displayedUserst, setDisplayedUserst] = useState(displayedUsers);

	useEffect(() => {
		setDisplayedUserst(users);
	}, [users, displayedUsers]);

	//console.log(userst);

	return (
		<div>
			<h1>main</h1>
			<Search users={users} callback={callback} />
			<Users users={displayedUserst} callback={callback} />
		</div>
	);
};

export default Main;
