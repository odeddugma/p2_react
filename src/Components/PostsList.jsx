import { useEffect, useState } from "react";
import UserPost from "./UserPost";

const PostsList = (props) => {
	const { userId, posts, callback } = props;
	const [addPostState, setAddPostState] = useState(props.addPostState);

	useEffect(() => {
		callback.changeAddPostDisplayState(addPostState);
	}, [addPostState]);

	return (
		<div>
			<div className="sidebar-top-strip">
				<h5>Posts - User {userId}</h5>
				<button className="btn-yellow" onClick={() => setAddPostState(true)}>
					ADD
				</button>
			</div>
			<ul className="posts-list">
				{posts.map((post) => (
					<UserPost key={post.id} post={post} />
				))}
			</ul>
		</div>
	);
};

export default PostsList;
