import React from "react";
import Users from "./Users";

const Main = ({ users }) => {
	return (
		<div>
			<h1>main</h1>
			<Users users={users} />
		</div>
	);
};

export default Main;
