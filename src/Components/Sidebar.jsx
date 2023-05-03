import React from "react";
import UserTodos from "./UserTodos";
import UserPosts from "./UserPosts";

const Sidebar = ({ user, addTodoState, addPostState, callback }) => {
	return (
		<div>
			<h1>sidebar</h1>
			<UserTodos user={user} addTodoState={addTodoState} callback={callback} />
			<UserPosts user={user} addPostState={addPostState} callback={callback} />
		</div>
	);
};

export default Sidebar;
