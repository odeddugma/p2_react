import React from "react";
import UserTodos from "./UserTodos";
import UserPosts from "./UserPosts";

const Sidebar = ({ user, addTodoState, callback }) => {
	return (
		<div>
			<h1>sidebar</h1>
			<UserTodos user={user} addTodoState={addTodoState} callback={callback} />
			<UserPosts id={user.id} posts={user.posts} />
		</div>
	);
};

export default Sidebar;
