import axios from 'axios';
import { ADDNEWTODO,GETALL_TODO,TOGGLE_TODO, UPDATE_TODO ,DELETE_TODO, TOGGLE_TAB} from './type';
const URL="https://todoappbackend-0s7v.onrender.com";

export const addnewTodo=(data)=>async(dispatch)=>{
    try {
       const res=await axios.post(`${URL}/todos`,{data});
         console.log(data)
        dispatch({type:ADDNEWTODO,payload:res.data})
        
    } catch (error) {
        console.log(`Error while calling addnewTodoApi`,error.message);
    }
    

}

export const getallTodos=async(dispatch)=>{
    try {
       const res=await axios.get(`${URL}/todos`);
      
       dispatch({type:GETALL_TODO,payload:res.data})
        
    } catch (error) {
        console.log(`Error while calling addnewTodoApi`,error.message);
    }
    

}



export const ToggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${URL}/todos/${id}`);

        dispatch({ type: TOGGLE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const updateTodo =(id,data)=>async(dispatch)=>{
    try {
       const res=await axios.put(`${URL}/todos/${id}`,{data});
        console.log(data)
        dispatch({type:UPDATE_TODO,payload:res.data})
        console.log(res.data)
    } catch (error) {
        console.log(`Error while calling addnewTodoApi`,error.message);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${URL}/todos/${id}`);

        dispatch({ type: DELETE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}


export const toggletab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab })
}