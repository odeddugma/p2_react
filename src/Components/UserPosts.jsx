import UserPost from "./UserPost";

const UserPosts = ({ id, posts }) => {
	return (
		<div>
			<h5>Posts - User {id}</h5>
			<ul className="posts-list">
				{posts.map((post) => (
					<UserPost key={post.id} post={post} />
				))}
			</ul>
		</div>
	);
};

export default UserPosts;
