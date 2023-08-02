import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext';

const ListItem = ({todo}) => {
 const { deleteTodo, editTodo} = useContext(TodoContext)

  return (
    <li className="list-group-item  w-100 rounded-0">{todo.text}
  <button class="btn btn-outline-warning rounded-0  float-end  w-600 remove-clear"  onClick={() => editTodo(todo)}>Update</button>
  <button class="btn btn-outline-danger rounded-0 float-end w-600 remove-clear" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default ListItem
