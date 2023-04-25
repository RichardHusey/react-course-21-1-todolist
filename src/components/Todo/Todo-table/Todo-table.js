import "./Todo-table.css";
export const TodoTable = ({list}) =>{
  return (
    <div className="todo-list">
      {
        list.map((row)=>(
          <li style={{
            textDecoration: row.done ? 'line-through' : 'none'
          }} key={row.todo}><input type="checkbox" checked={row.done}  />{row.todo}</li>
        ))
      }
    </div>
  )
}