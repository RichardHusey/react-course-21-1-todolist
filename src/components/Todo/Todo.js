import { useState } from 'react';

import { TodoFooter } from "./Todo-footer/Todo-footer"
import { TodoInput } from "./Todo-inputs/Todo-inputs"
import { TodoTable } from "./Todo-table/Todo-table"

import  "./Todo.css"

export const Todo = () =>{

  const [todoList, setTodoList] = useState([
    {todo:'Learn JavaScript', done:false},
    {todo:'Learn React', done:false},
    {todo:'Build a React App', done:false}
  ]);
 
  const [mode, setMode] = useState('Add New');

  const handleAdd = (item) =>{
    setTodoList((initial)=>[...initial, {todo: item, done: false}])
  }

  return (
    <div className="todo">
      <h1>THINGS TO DO</h1>
      <TodoInput mode={mode} AddHandler={handleAdd}></TodoInput>
      <TodoTable list={todoList}></TodoTable>
      <TodoFooter></TodoFooter>
    </div>
  )
}