import "./Todo-footer.css"

import { StyledFaPlus, StyledFaSearch } from "../../StyledComponents/ReactIcons"
import { useState } from "react"

export const TodoFooter = ({todoLength, selectorHandler, modeHandler}) =>{

  const [selected, setSelected] = useState('all');
  const handleSelector = (selector) =>{ 
    setSelected(()=>(selector));
    selectorHandler(selector);
  }
  const handleMode = (mode)=>{
    modeHandler(mode);
  }
  return (
    <div class="todo-footer">
     
      <div className="todo-tools">
        <StyledFaPlus onClick={()=>{handleMode('Add New')}}></StyledFaPlus>
        <StyledFaSearch onClick={()=>{handleMode('Search')}}></StyledFaSearch>
        <span> {todoLength} items left</span> 
      </div>
      <div className="todo-filter">
        <button style={{backgroundColor: selected==='all' ? "lightblue": "white"}}  onClick={()=>handleSelector('all')} >All</button>
        <button style={{backgroundColor: selected==='active' ? "lightblue": "white"}} onClick={()=>handleSelector('active')} >Active</button>
        <button style={{backgroundColor: selected==='completed' ? "lightblue": "white"}} onClick={()=>handleSelector('completed')} >Completed</button>
      </div>
    </div>
  )
}