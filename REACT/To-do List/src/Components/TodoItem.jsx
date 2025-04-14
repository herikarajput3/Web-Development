import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span
                style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
                onClick={() => toggleTodo(todo.id)} 
            >
                {todo.text}
            </span>
            <div>
                <button className="btn btn-outline-success btn-sm me-2" onClick={() => toggleTodo(todo.id)}>
                    Complete
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
