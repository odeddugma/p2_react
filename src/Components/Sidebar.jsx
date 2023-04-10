import React from "react";
import UserTodos from "./UserTodos";
import UserPosts from "./UserPosts";

const Sidebar = ({ user }) => {
	return (
		<div>
			<h1>sidebar</h1>
			<UserTodos id={user.id} todos={user.todos} />
			<UserPosts id={user.id} posts={user.posts} />
		</div>
	);
};

export default Sidebar;
