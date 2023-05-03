import AddPost from "./AddPost";
import PostsList from "./PostsList";
import UserPost from "./UserPost";

const UserPosts = ({ user, addPostState, callback }) => {
	return (
		<div>
			{addPostState ? (
				<AddPost user={user} addPostState={addPostState} callback={callback} />
			) : (
				<PostsList
					userId={user.id}
					posts={user.posts}
					addPostState={addPostState}
					callback={callback}
				/>
			)}
		</div>
	);
};

export default UserPosts;
