import { useState } from "react"
import "./Todo-inputs.css"

export const TodoInput = ({mode, AddHandler}) => {

  const [input, setInput] = useState('');

  

  const handleChangeInput = (e,)=>{
    const todo = e.target.value;
    if(todo && e.key === "Enter"){
      AddHandler(todo);
      setInput(()=>'');
    } else {
      setInput(()=>todo)
    }
  }
  return(
    <input 
      className="todo-input" 
      type="text"
      placeholder={mode} 
      value={input}
      onChange={handleChangeInput}
      onKeyDown={handleChangeInput}
    />
  )
}