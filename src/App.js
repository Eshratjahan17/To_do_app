
import { useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
import ListItem from './Components/ListItem';


function App() {
  const [listTodo, setListTodo] = useState([]);
 
  let addList = (inputTask) => {
    setListTodo([...listTodo, inputTask]);  
   
  } 
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo])

  }

  return (
    <div className='bg-background p-5 h-screen' >
      <Todo addList={addList} ></Todo>
      {
        listTodo.map((listItem, i) => {
          return <ListItem key={i} listItem={listItem} index={i} deleteListItem={deleteListItem}></ListItem>
        })
     }
      
      </div>
  );
}

export default App;
