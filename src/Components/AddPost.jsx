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
		<div className="add-container">
			<div className="add-form">
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
				<div className="text-align-end">
					<button className="btn-yellow" onClick={handleCancelClick}>
						Cancel
					</button>
					<button className="btn-yellow" onClick={handleAddClick}>
						Add
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddPost;
