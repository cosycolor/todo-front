import './App.css';
import Todo from './Todo';
import React, {useState} from "react";
import { Container, List, Paper } from "@mui/material";
import AddTodo from "./AddTodo.js";


function App() {
  const [items, setItems] = useState([]);

    const addItem = (item) => {
      item.id = "ID-" + items.length;
      item.done = false;
      setItems([...items, item]);
      console.log("items", items);
    }

    let todoItems = 
      items.length > 0 && (
        <Paper style = {{margin : 16}}>
          <List>
            {items.map((item) => (
              <Todo item = {item} key = {item.id}/>
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
