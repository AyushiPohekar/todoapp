import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../App.css'
import { addnewTodo } from '../redux/actions';

const TodoForm = ()=>{
  const[text,setText]=useState("");
  const dispatch=useDispatch();
    
  const onSubmitHandler=(e)=>{
      e.preventDefault();
      dispatch(addnewTodo(text));
      setText("");
    }

    const onChangeHandler=(e)=>{
       setText(e.target.value)
    }

return(
    <form onSubmit={onSubmitHandler}>
        <input type='text' placeholder='Enter todo....' onChange={onChangeHandler} value={text}/>
    </form>
)
}

export default TodoForm