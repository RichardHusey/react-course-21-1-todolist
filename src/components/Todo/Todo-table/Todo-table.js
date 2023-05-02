import { useState } from "react";
import "./Todo-table.css";
export const TodoTable = ({ list, checkHandle }) => {

  const [checked, setChecked] = useState()
  const handleCheck = (e, todo)=>{
    const {checked} = e.target;
    checkHandle(checked, todo)
  }
  return (
    <div className="todo-list">
      {list.map((row) => (
        <li
          style={{
            textDecoration: row.done ? "line-through" : "none",
          }}
          key={row.todo}
        >
          <input type="checkbox" checked={row.done} onChange={(e)=>{handleCheck(e, row.todo)}} />
          {row.todo}
        </li>
      ))}
    </div>
  );
};
