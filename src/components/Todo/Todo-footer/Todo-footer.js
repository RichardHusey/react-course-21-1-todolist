import "./Todo-footer.css"

import { StyledFaPlus, StyledFaSearch } from "../../StyledComponents/ReactIcons"

export const TodoFooter = () =>{
  return (
    <div class="todo-footer">
     
      <div className="todo-tools">
        <StyledFaPlus/>
        <StyledFaSearch/>
        <span> 3 items left</span> 
      </div>
      <div className="todo-filter">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}