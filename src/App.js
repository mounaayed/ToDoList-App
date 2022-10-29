import React ,{useState} from 'react';
import Header from './components/Header';
import './App.css';
import Form from'./components/Form';
import Todolist from './components/Todolist';


const  App = () => {
  
  
  return (
    <div className="container">
     <div className="app-wrapper">
      <div>
        <Header/>
      </div>
      <div>
        <Form/>
      </div>
    
     </div>
     {/* <Todolist todos = {todos} /> */}
    </div>
  );
};

export default App;
