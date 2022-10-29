import React ,{useEffect, useState} from 'react'
import {v4 as uuidv4} from "uuid";
import Todolist from './Todolist';

const Form = () => {
  const [myedit,seteditt] = useState('');

  const [myinput,setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const[editId, setEditId] = useState('');
  const[isopen, setisopen] = useState(false);
  const Delete = (e,id) =>{
    setTodos(todos.filter((x)=> x.id!=id));
   }
   const Edit = (e,id) =>{
    e.preventDefault();
    setisopen(!isopen)
    todos.map((x)=> x.id==id? x.title = myedit: null)
    
    }
    useEffect(()=>{
      console.log('hi');
    } ,[myinput])
 

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos,{ id:uuidv4(), title: myinput, completed: false}]);
        setInput('');
         
    };
  return (
    <div>

    <form onSubmit={onFormSubmit}>

        <input
         type="text"
         name="myinput"
         placeholder ="Entrer a todo...." 
         className="task-input"
         value={myinput} 
         required
         onChange={e=>setInput(e.target.value)}
         />
       
        <button className="button-add" type="submit">Add</button>
    </form>
    <ul>{todos.map((todo) => <div>
   {isopen ? <input type="text" name="edit" placeholder={todo.title} value={myedit}
    onChange={e=>seteditt(e.target.value)} /> :<li className="list-item" key={todo.id}>
        {todo.title}    </li> }    
      
   <button onClick ={e=>Delete (e,todo.id)}>Delete</button>
   {isopen ?    <button className="button-edit task-button" onClick ={(e) => Edit(e,todo.id)}>Submit</button>
 :
           <button className="button-edit task-button" onClick ={() => setisopen(!isopen)}>Edit</button>
          }  
   </div>
       
    )}</ul>
    </div>
  )
}


export default Form