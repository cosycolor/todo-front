import './App.css';
import Todo from './Todo';
import React, {useState} from "react";
import { List, Paper } from "@mui/material";


function App() {
  const [items, setItem] = useState([
    {
      id : "0",
      title : "Hello World",
      done : true
    },
    {
      id : "1",
      title : "Goodbye World",
      done : false
    },
    {
      id : "2",
      title : "Good afternoon",
      done : true
    }]);

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
      {todoItems}
    </div>
  );
}

export default App;
