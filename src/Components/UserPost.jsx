import React from "react";

const UserPost = ({ post }) => {
	return (
		<li className="post-item">
			<div>
				<button onClick={() => {}}>ADD</button>
				<button onClick={() => {}}>Cancel</button>
				<p>Title: {post.title}</p>
				<p>Body: {post.body}</p>
			</div>
		</li>
	);
};

export default UserPost;
