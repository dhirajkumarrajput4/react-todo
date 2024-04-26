import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import './style.css';

const App = () => {
  return (
    <div className="todo-container">
      <Header></Header>
      <TodoItem title="Eat"></TodoItem>
      <TodoItem title="Code"></TodoItem>
    
      <TodoItem title="Sleep"></TodoItem>
      <TodoItem title="Repeat"></TodoItem>
      <Button></Button>
    </div>
  );
}

export default App;
