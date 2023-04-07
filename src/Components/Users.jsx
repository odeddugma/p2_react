import React from "react";
import User from "./User";

const Users = ({ users }) => {
	return (
		<ul className="usersList">
			{users.map((user) => (
				<li>
					<User key={user.id} user={user} />
				</li>
			))}
		</ul>
	);
};

export default Users;
