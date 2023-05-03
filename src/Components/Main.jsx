import { useState, useEffect } from "react";
import Users from "./Users";
import Search from "./Search";

const Main = ({ users, displayedUsers, callback }) => {
	return (
		<div className="main">
			<div className="main-top-strip">
				<Search users={users} callback={callback} />
				<button
					className="btn-yellow"
					onClick={() => callback.changeAddUserDisplayState(true)}
				>
					Add
				</button>
			</div>
			<Users users={displayedUsers} callback={callback} />
		</div>
	);
};

export default Main;
