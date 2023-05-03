import React from "react";
import UserTodos from "./UserTodos";
import UserPosts from "./UserPosts";
import AddUser from "./AddUser";

const Sidebar = ({
	user,
	addTodoState,
	addPostState,
	addUserState,
	callback,
}) => {
	return (
		<div>
			<h1>sidebar</h1>
			{addUserState ? (
				<AddUser addUserState={addUserState} callback={callback} />
			) : (
				<>
					<UserTodos
						user={user}
						addTodoState={addTodoState}
						callback={callback}
					/>
					<UserPosts
						user={user}
						addPostState={addPostState}
						callback={callback}
					/>
				</>
			)}
		</div>
	);
};

export default Sidebar;
