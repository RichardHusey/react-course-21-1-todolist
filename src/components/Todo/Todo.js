import { useState } from "react";

import { TodoFooter } from "./Todo-footer/Todo-footer";
import { TodoInput } from "./Todo-inputs/Todo-inputs";
import { TodoTable } from "./Todo-table/Todo-table";

import "./Todo.css";

export const Todo = () => {
  const [todoList, setTodoList] = useState([
    { todo: "Learn JavaScript", done: false },
    { todo: "Learn React", done: false },
    { todo: "Build a React App", done: false },
  ]);

  const [filter, setFilter] = useState("all");
  const [searchWord, StyledFaSearch] = useState('');
  const [mode, setMode] = useState("Add New");

  const handleAdd = (item) => {
    if(mode === "Add New"){
      setTodoList((initial) => {
        const flag = initial.every((value) => {
          return value.todo !== item;
        });
  
        if (flag) return [...initial, { todo: item, done: false }];
        else return initial;
      });
    }else if(mode === "Search"){

    }
    
  };

  const handleChecked = (check, todo) => {
    setTodoList((initList) => {
      const newList = initList.map((item) => {
        if (item.todo === todo) return { todo: todo, done: check };
        return item;
      });

      return newList;
    });
  };

  const filteredList = (selector) => {
    if (selector === "active") {
      const activeList = todoList.filter((todo) => {
        return todo.done !== true;
      });
      return activeList;
    } else if (selector === "completed") {
      const completedList = todoList.filter((todo) => {
        return todo.done === true;
      });
      return completedList;
    } else {
      return todoList;
    }
  };

  const handleMode = (modeName)=>{
    if(modeName === "Add New") setMode("Search")
    else if(modeName === "Search") setMode("Add New");
  }

  const searchList = (keyword) =>{
    const matchedList = todoList.filter((todo)=>{
      return todo.todo.includes(keyword);
    })
    return matchedList;
  }

  return (
    <div className="todo">
      <h1>THINGS TO DO</h1>
      <TodoInput mode={mode} AddHandler={handleAdd}  ></TodoInput>
      <TodoTable
        list={filteredList(filter)}
        checkHandle={handleChecked}
      ></TodoTable>
      <TodoFooter
        todoLength={filteredList("active").length}
        selectorHandler={(selector) => {
          setFilter(selector);
        }}
        modeHandler={(keyword) =>{
          setMode(keyword);
        }}
      ></TodoFooter>
    </div>
  );
};
