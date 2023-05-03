import { useEffect } from "react";
import User from "./User";

const Users = ({ users, callback }) => {
	return (
		<ul className="usersList">
			{users.map((user) => {
				return (
					<li key={user.id}>
						<User user={user} callback={callback} />
					</li>
				);
			})}
		</ul>
	);
};

export default Users;
