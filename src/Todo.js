import React, {useState} from "react"
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

const Todo = (props) =>{
  const [readOnly, setReadOnly] = useState(true);
  const [item, setItem] = useState(props.item);
  const deleteItem = props.deleteItem;
  const editItem = props.editItem;

  const checkboxEventHandler = (e) =>{
    item.done = e.target.checked;
    editItem();
  }

  const editEventHandler = (e) => {
    item.title = e.target.value;
    editItem();
  }
  
  const deleteEventHandler = () =>{
    deleteItem(item);
  }

  const turnOffReadOnly = () =>{
    setReadOnly(false);
  }

  const turnOnReadOnly = (e) =>{
    if(e.key === "Enter"){
      setReadOnly(true);
    }
  }

  return (
    <ListItem>
      <Checkbox checked = {item.done} onChange = {checkboxEventHandler}/>
      <ListItemText>
        <InputBase
          inputProps = { {"aria-label" : "naked", readOnly : readOnly}}
          onClick = {turnOffReadOnly}
          onKeyDown={turnOnReadOnly}
          onChange={editEventHandler}
          type = "text"
          id = {item.id}
          name = {item.id}
          value = {item.title}
          multiline = {true}
          fullWidth = {true}
          />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick = {deleteEventHandler}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Todo;