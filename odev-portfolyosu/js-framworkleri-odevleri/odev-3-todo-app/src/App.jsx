import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('muhammed_todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState('');


  useEffect(() => {
    localStorage.setItem('muhammed_todos', JSON.stringify(todos));
  }, [todos]);


  const handleAdd = () => {
    if (text.trim() === '') return;
    setTodos([...todos, { id: Date.now(), gorev: text }]);
    setText('');
  };


  const handleDelete = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="main-wrapper">
      <div className="todo-card">
        <header>
          <span className="label">Hafta 3: Todo App</span>
          <h1>Yapılacaklar</h1>
        </header>

        <div className="input-box">
          <input
            type="text"
            placeholder="Görev yaz ve enter'a bas..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          />
          <button onClick={handleAdd}>Ekle</button>
        </div>

        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id}>
              <span>{todo.gorev}</span>
              <button onClick={() => handleDelete(todo.id)} className="del-btn">Sil</button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && <p className="empty">Liste boş, yeni görev ekle!</p>}
      </div>
    </div>
  );
}

export default App;