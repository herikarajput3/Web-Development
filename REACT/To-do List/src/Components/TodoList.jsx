import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    // Use react-hook-form
    const { register, handleSubmit, reset } = useForm();

    // Fetch initial todos from the server
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/todos');
                setTodos(response.data); // Set state with fetched todos
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    // Add a new To-Do
    const addTodo = async (data) => {
        if (data.task.trim() === "") return;
        const newTodo = { text: data.task, completed: false };

        try {
            const response = await axios.post('http://localhost:3000/todos', newTodo);
            setTodos([...todos, response.data]); // Update state with new todo
            reset(); // Reset the form after adding
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    // Toggle task completion
    const toggleTodo = async (id) => {
        try {
            const todoToUpdate = todos.find((todo) => todo.id === id);
            const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
            await axios.put(`http://localhost:3000/todos/${id}`, updatedTodo);
            setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    // Delete a To-Do with API request
    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/todos/${id}`);

            const response = await axios.get('http://localhost:3000/todos');
            setTodos(response.data); 

            alert('Task deleted successfully!');
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };


    return (
        <div className="container-fluid my-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <h2 className="text-center mb-4">To-Do List</h2>

                    <form className="d-flex mb-4" onSubmit={handleSubmit(addTodo)}>
                        <input
                            type="text"
                            className="form-control me-2 rounded-pill"
                            placeholder="Enter a task"
                            {...register("task", { required: "Task is required" })}
                        />
                        <button type="submit" className="btn btn-primary rounded-pill">
                            Add Task
                        </button>
                    </form>

                    {/* Task List */}
                    <ul className="list-group">
                        {todos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                toggleTodo={toggleTodo}
                                deleteTodo={deleteTodo}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
