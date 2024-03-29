import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ToggleTodo,updateTodo,deleteTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'
 import './Component.css'
 import '../App.css'
import { useState } from 'react';


 const Todo=({todo})=>{
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text))
    }
    
   
     return(
        <li
            className="task"
            onClick={() => dispatch(ToggleTodo(todo._id))}
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                color: todo?.done ? 'red' : '#34495e',
               
            }}
            data-testid="todo-test"
        >
            <span style={{ display: editing ? 'none' : '' }}>{todo?.data}</span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            <span className="icon"  onClick={() => dispatch(deleteTodo(todo._id))}>
                <FontAwesomeIcon icon={faTrash} className="trashicon"/>
                
            </span>
            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
            <FontAwesomeIcon icon={faEdit} className="editicon"/>
            </span>
        </li>
     )
}

export default Todo;