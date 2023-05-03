import { useState, useEffect } from "react";
import Users from "./Users";
import Search from "./Search";

const Main = ({ users, displayedUsers, callback }) => {
	//const [displayedUsers, setDisplayedUsers] = useState(displayedUsers);

	/* useEffect(() => {
		setDisplayedUserst(users);
	}, [users, displayedUsers]); */

	return (
		<div>
			<h1>main</h1>
			<Search users={users} callback={callback} />
			<Users users={displayedUsers} callback={callback} />
		</div>
	);
};

export default Main;
