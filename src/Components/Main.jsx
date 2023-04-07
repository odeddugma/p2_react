import React from "react";
import Users from "./Users";
import Search from "./Search";

const Main = ({ users, callback }) => {
	return (
		<div>
			<h1>main</h1>
			<Search users={users} callback={callback} />
			<Users users={users} callback={callback} />
		</div>
	);
};

export default Main;
