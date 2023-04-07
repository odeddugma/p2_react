import React from "react";
import Users from "./Users";

const Main = ({ users, callback }) => {
	return (
		<div>
			<h1>main</h1>
			<Users users={users} callback={callback} />
		</div>
	);
};

export default Main;
