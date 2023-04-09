import { useState } from "react";
import Users from "./Users";
import Search from "./Search";

const Main = ({ users, displayedUsers, callback }) => {
	//console.log(users);

	return (
		<div>
			<h1>main</h1>
			<Search
				users={users}
				displayedUsers={displayedUsers}
				callback={callback}
			/>
			<Users users={displayedUsers} callback={callback} />
		</div>
	);
};

export default Main;
