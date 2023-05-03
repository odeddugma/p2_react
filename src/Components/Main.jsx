import { useState, useEffect } from "react";
import Users from "./Users";
import Search from "./Search";

const Main = ({ users, displayedUsers, callback }) => {
	return (
		<div>
			<h1>main</h1>
			<div className="top-strip">
				<Search users={users} callback={callback} />
				<button onClick={() => callback.changeAddUserDisplayState(true)}>
					Add
				</button>
			</div>
			<Users users={displayedUsers} callback={callback} />
		</div>
	);
};

export default Main;
