import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import UserTodo from "./UserTodo";
import TodosList from "./TodosList";

const UserTodos = (props) => {
	return (
		<div>
			{props.addTodoState ? (
				<AddTodo
					user={props.user}
					addTodoState={props.addTodoState}
					callback={props.callback}
				/>
			) : (
				<TodosList
					id={props.user.id}
					todos={props.user.todos}
					addTodoState={props.addTodoState}
					callback={props.callback}
				/>
			)}
		</div>
	);
};

export default UserTodos;
