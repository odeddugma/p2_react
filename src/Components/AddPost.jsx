import { useState } from "react";

const AddPost = (props) => {
	const [post, setPost] = useState({
		userId: props.user.id,
		title: "",
		body: "",
	});

	const handleCancelClick = () => {
		props.callback.changeAddPostDisplayState(!props.addPostState);
	};

	const handleAddClick = () => {
		props.callback.addPost(props.user.id, post);
	};

	return (
		<div>
			<p>
				Title:{" "}
				<input
					type="text"
					onInput={(e) => setPost({ ...post, title: e.target.value })}
				/>
			</p>
			<p>
				Body:{" "}
				<input
					type="text"
					onInput={(e) => setPost({ ...post, body: e.target.value })}
				/>
			</p>
			<button onClick={handleCancelClick}>Cancel</button>
			<button onClick={handleAddClick}>Add</button>
		</div>
	);
};

export default AddPost;
