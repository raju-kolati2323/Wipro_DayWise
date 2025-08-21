import React, { useEffect, useState } from 'react';

const TodoTracker = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setFilteredTodos(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (filter === 'completed') {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    } else if (filter === 'pending') {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    } else {
      setFilteredTodos(todos);
    }
  }, [filter, todos]);

  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Todo Tracker</h2>
        <select style={{padding:'10px'}} value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
        <div style={{
          flex: 1,
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3>Completed Tasks</h3>
          <p style={{ fontSize: '24px', margin: 0 }}>{completedCount}</p>
        </div>

        <div style={{
          flex: 1,
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3>Pending Tasks</h3>
          <p style={{ fontSize: '24px', margin: 0 }}>{pendingCount}</p>
        </div>
      </div>

      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Task Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? ' Completed' : ' Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTracker;
