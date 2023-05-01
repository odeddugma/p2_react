import { useEffect } from "react";
import User from "./User";

const Users = ({ users, callback }) => {
	useEffect(() => {
		users.sort((a, b) => a.id - b.id);
	}, [users]);

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
