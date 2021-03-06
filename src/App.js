import React, { useState } from 'react';



function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really ccol todo app" },
  ]);
  //?
  const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  )

}
export default App