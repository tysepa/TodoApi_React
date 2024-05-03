
import React, { useState, useEffect } from 'react';
import axios from 'axios';




const CrudOper = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const API_URL = 'https://dummyjson.com/todos';

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched todos:', data);
        setTodos(data.todos);
        console.log('Updated todos:', todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    try {
      const response = await axios.post(API_URL, { todos: newTodo });
      setTodos([...todos,response.data]);
      setNewTodo('');
      console.log('here ', response.todos)
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const updateTodo = async (id, todo) =>{
      try{
        const response = await axios.put(`${ API_URL } / ${ id }`, todo);
        return response.data;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw new Error('Failed to update todo');
    }
      }
  
   

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className='m-8'>
      <h1>Todo CrudOper</h1>
      <form onSubmit={(e) => { e.preventDefault(); addTodo(); }}>
        <input type="text" value={newTodo}  onChange={(e) => setNewTodo(e.target.value)} className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'  />
        <button type="submit" className='bg-blue-500 p-2 rounded-lg w-[40%] mx-6 m-2'>Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.todo}
            <div className='grid grid-flow-col '>
            <button onClick={() => deleteTodo(todo.id)} className='bg-red-500 p-2 rounded-lg w-full m-2'>Delete</button>
            <button onClick={() => updateTodo(todo.id)} className='bg-green-500 p-2 rounded-lg w-full mx-4 m-2'>Edit</button>
            <button onClick={()=>updateTodo(todo.id)} className='bg-blue-500 p-2 rounded-lg w-full mx-6 m-2'>Update</button>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudOper;

