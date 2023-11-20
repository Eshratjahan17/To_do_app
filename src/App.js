
import { useState } from 'react';
import './App.css';
import Todo from './Components/Todo';


function App() {
  const [listTodo, setListTodo] = useState([]);
  const [listDesc, setListDesc] = useState([]);
  let addList = (inputTask) => {
    setListTodo([...listTodo, inputTask]);  
  } 
  // let addDescList = (inputDesc) => {
  //   setListTodo([...listTodo, inputTask]);  
  // } 
  return (
    <div className='bg-background p-5' >
      <Todo addList={ addList}></Todo>
      </div>
  );
}

export default App;
