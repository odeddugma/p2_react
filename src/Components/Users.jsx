import React from "react";
import User from "./User";

const Users = ({ users, callback }) => {
	return (
		<ul className="usersList">
			{users.map((user) => (
				<li key={user.id}>
					<User user={user} callback={callback} />
				</li>
			))}
		</ul>
	);
};

export default Users;
