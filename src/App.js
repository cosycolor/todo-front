import './App.css';
import Todo from './Todo';
import React, {useState, useEffect} from "react";
import { Container, List, Paper } from "@mui/material";
import AddTodo from "./AddTodo.js";
import { call } from './service/ApiService.js';


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/todo", "GET", null)
    .then((response) => setItems(response.data));
  },[]);

 

    const addItem = (item) => {
      call("/todo", "POST", item)
      .then((response) => setItems(response.data));

      // item.id = "ID-" + items.length;
      // item.done = false;
      // setItems([...items, item]);
    }

    const deleteItem = (item) =>{
      call("todo", "DELETE", item)
      .then((response) => setItems(response.data));

      // const newItems = items.filter(e => e.id !== item.id);
      // setItems([...newItems]);
    }

    const editItem = () =>{
      setItems([...items]);
    }

    let todoItems = 
      items.length > 0 && (
        <Paper style = {{margin : 16}}>
          <List>
            {items.map((item) => (
              <Todo item = {item} key = {item.id} deleteItem={deleteItem} editItem={editItem}/>
            ))}
          </List>
        </Paper>
        );
  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <div className="TodoList">{todoItems}</div>
      </Container>
      
    </div>
  );
}

export default App;
