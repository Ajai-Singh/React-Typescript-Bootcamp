import './App.css';
import InputField from './components/InputField';
import React from 'react';
import { useState } from 'react';
import TodoList from './components/TodoList';
import type { Todo } from './models/Todo';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <>
     <div className="App">

        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo}></InputField>
        <TodoList todos={todos} setTodos={setTodos}>
 

        </TodoList>

        

     </div>
    </>
  )
}

export default App
